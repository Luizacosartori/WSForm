import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  therapistData,
  clientData,
  treatmentData,
  massageForm,
} from './formsData';

@Injectable()
export class dataService {
  private url: string = 'http://localhost:3060/api/WSForms';
  constructor(private http: HttpClient) { }

  //Gets from Mindbody
  public getUserToken(data: any): Observable<clientData> {
    return this.http.post<clientData>(this.url + '/login/', data);
  }

  public getClientTreatment(data: any): Observable<clientData> {
    return this.http.post<clientData>(this.url + '/getClientTreatment/', data);
  }

  public getStaff(data: any): Observable<clientData> {
    return this.http.post<clientData>(this.url + '/getStaff/', data);
  }

  //Send a GET request to the server
  public getClientData(): Observable<clientData> {
    return this.http.get<clientData>(this.url + '/client/');
  }

  //WHY
  public getClientDataById(client_id: any): Observable<clientData> {
    return this.http.get<clientData>(this.url + '/client/' + client_id);
  }

  //returns massage form data based on full name WHY?
  public getMassageFormByName(client_full_name: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + client_full_name);
  }

  //Get massage form by ID to show information on Dashboard Page
  public getMassageFormById(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/massageForm/' + id);
  }

  public getMassageFormData(): Observable<massageForm> {
    return this.http.get<massageForm>(this.url + "/massageForm/");
  }

  //Send a GET request to the server
  public getTreatmentData(): Observable<treatmentData> {
    return this.http.get<treatmentData>(this.url + '/treatment/');
  }

  //Send a GET request to the server
  public getTreatmentDataById(client_id: any): Observable<treatmentData> {
    return this.http.get<treatmentData>(this.url + "/treatment/" + client_id);
  }

  //Send a GET request to the server and returns all information necessary for the health insurance report
  public healthInsuranceReportNotesAndTreatments(client_full_name: any): Observable<treatmentData> {
    return this.http.get<treatmentData>(this.url + "/healthInsuranceReport/" + client_full_name);
  }

  //Send a GET request to the server
  public getTeraphistData(): Observable<therapistData> {
    return this.http.get<therapistData>(this.url + "/therapist/");
  }

  //Send a POST request to the server/ adds massage form data
  public setClientMassageForm(data: any): Observable<any> {
    return this.http.post(this.url + '/NewClientMassageForm/', data);
  }

  //Send a POST request to the server, adds treatment notes
  public setMassageNotes(client_id: any, data: any): Observable<any> {
    return this.http.post(this.url + '/NewNotesForm/' + client_id, data);
  }
}
