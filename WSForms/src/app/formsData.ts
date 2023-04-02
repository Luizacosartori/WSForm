export class formsData {
    therapis_id: number;
    name: string;
    treatment: string;

    constructor(i: number, n: string, t: string) {
        this.therapis_id = i;
        this.name = n;
        this.treatment = t;
    }
}