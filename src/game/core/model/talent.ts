/**
 * Ein Talent gibt für bestimmte Spiele- bzw. Sendegenres zusätzliche Bonuspunkte auf die Qualität der Sendung.
 */
export interface Talent {
    /** Das Genre, bei dem das Talent wirksam wird. */
    genre: string;
    /** Die Wurfvorschrift inklusive etwaigem Basiswert, z.B. '1W20+5'. */
    wurf: string;
}
