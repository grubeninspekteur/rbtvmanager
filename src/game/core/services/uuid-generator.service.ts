import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v4';

@Injectable({
  providedIn: 'root',
})
export class UuidGeneratorService {
  public generate(): string {
    return uuid();
  }
}
