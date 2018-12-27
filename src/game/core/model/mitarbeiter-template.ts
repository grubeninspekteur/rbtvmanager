import { MitarbeiterTyp } from './mitarbeiter-typ';
import { Talent } from './talent';

/**
 * Die Basiswerte eines Mitarbeiters. Entweder aus den legendären Mitarbeitern geladen oder
 * generisch erzeugt.
 */
export interface MitarbeiterTemplate {
    /** Eindeutige ID des Templates. */
    id: string;

    /** Name des Mitarbeiters. Generische Mitarbeiter erhalten immer einen vollen Vor- und Nachnamen. */
    name: string;

    /** Ob es sich hierbei um eine echte (legendäre) Bohne handelt. */
    legendaer: boolean;

    geschlecht: 'M' | 'F';

    /** Passender Spruch (nur bei legendären). */
    zitat?: string;

    /**
     * Name der Avatardatei ohne Pfad. Die Unterscheidung zwischen generischem und legendärem
     * PFad wird anhand des Legendär-Flags getroffen.
     */
    avatar: string;

    /** Eine oder mehrere Typen des Mitarbeiters. Der erste Typ bezeichnet die Hauptaufgabe. */
    typen: MitarbeiterTyp[];

    /**
     * Es folgen die Basistalente mit Werten von 1-20.
     */

    /** Moderator: beeinflusst Qualität einer moderierten Sendung im Allgemeinen. Kann nachfolgende Sendungen buffen. */
    moderation?: number;
    /** Moderator: Wie gut auf Unvorhergesehenes reagiert wird. */
    spontaneitaet?: number;
    /**
     * Moderator: Konfliktfähigkeit gegenüber Co-Moderatoren oder schwierigen Gästen. Ein niedriger Wert kann bei
     * kompetitiven Sendungen auch positiv sein.
     **/
    gelassenheit?: number;
    /**
     * Grafiker/Cutter: allgemeiner Qualitätsfaktor.
     */
    kreativitaetVis?: number;
    /**
     * Grafiker/Cutter: wie schnell die Arbeit erledigt wird. Wird eine Geschwindigkeitsprobe bestanden, halbiert sich die Arbeitszeit.
     */
    geschwindigkeit?: number;
    /** Redakteur: allgemeiner Qualitätsfaktor. */
    kreativitaetOrg?: number;
    /** Redakteur: Bestimmt den Prestigelevel der Gäste. */
    connections?: number;
    /**Cutter/Regie & Ton: wird bei Patzerproben ausgewürfelt. */
    gewissenhaftigkeit?: number;
    /** Netzwerker: Talent, neue Sponsoren an Land zu ziehen. */
    verkaeufer?: number;
    /** Netzwerker: Talent, den Sender auf Messen o.ä. zu vertreten. */
    praesentator?: number;
    /** Regie & Ton/Kamera: Talent, gute Einstellungen zu erkennen, umzuschalten bzw. Sounds live einzuspielen. */
    zack?: number;

    talente: Talent[];

    /** Positive und negative Eigenschaften. */
    // TODO typisieren
    eigenschaften: string[];
}
