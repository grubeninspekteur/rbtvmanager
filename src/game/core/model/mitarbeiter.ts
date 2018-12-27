import { MitarbeiterTemplate } from './mitarbeiter-template';

/**
 * Ein Mitarbeiter, der eingestellt wurde.
 */
export interface Mitarbeiter extends MitarbeiterTemplate {
    /** Das Einstellungsdatum. */
    einstellungsDatum: Date;
    /** Monatliches Gehalt in Bietcoin. */
    gehalt: number;
    // TODO Task-Assignment-Logik
    aktuelleAufgabe?: any;
}
