import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { parse as parseCsv } from 'papaparse';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Lädt CSV-Daten vom Server nach und parst diese in ein Objekt.
 */
@Injectable({
  providedIn: 'root',
})
export class LoadCsvDataService {

  constructor(private http: HttpClient) { }

  /**
   * Lädt CSV-Daten von der angegebenen URL und parst diese in ein Array von Objekten des angegebenen Typs.
   * Die Spaltenüberschriften der CSV-Datei werden als Schlüssel des Objektes verwendet.
   * @param url die URL der Daten
   * @param converter ein Mapping von Feldern der CSV-Datei auf ein Callback, das eine Konvertierung vornimmt.
   *                  Wenn keine Konvertierung angegeben wurde, wird der Wert als String belassen.
   */
  public ladeCsv<T>(url: string,
    converter?: { [key in keyof T]?: (value: string) => T[key] }): Observable<T[]> {
    return this.http.get(url, { responseType: 'text' }).pipe(map(data => {
      return parseCsv(data, {
        delimiter: ',',
        header: true,
        transform: (value: string, header: string) => {
          if (converter && header && header in converter) {
            return converter[header](value.trim());
          } else {
            return value.trim();
          }
        },
      }).data;
    },
      // TODO show a toast or something
      error => console.log(error)));
  }
}

export function toBoolean(value: string): boolean {
  return value === 'true';
}

export function toNumber(value: string): number | undefined {
  return (value) ? _.toNumber(value) : undefined;
}
