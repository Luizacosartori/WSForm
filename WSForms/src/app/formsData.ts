export class therapistData {
    therapist_id: number;
    fullName: string;

    constructor(i: number, n: string) {
        this.therapist_id = i;
        this.fullName = n;
    }
}

export class clientData{
    firstName: string;
    middleName: string;
    lastName: string;
    mobile_phone: string;
    email: string;
    
    constructor(firstName: string, middleName: string, lastName: string, mobile_phone: string, email: string){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mobile_phone = mobile_phone;
        this.email = email;
    }
}

export class treatmentData{
    treatment_id: number;
    clientName: string;
    therapistName: string;
    treatment_notes_id: number;
    treatment_date: Date;
    treatment_notes: string;
    
    constructor(treatment_id: number, clientName: string, therapistName: string, treatment_notes_id: number, treatment_date: Date, treatment_notes: string){
        this.treatment_id = treatment_id;
        this.clientName = clientName;
        this.therapistName = therapistName;
        this.treatment_notes_id = treatment_notes_id;
        this.treatment_date = treatment_date;
        this.treatment_notes = treatment_notes;
    }
}