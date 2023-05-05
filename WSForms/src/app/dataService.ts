import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { therapistData, clientData, treatmentData, massageForm } from "./formsData";

@Injectable()
export class dataService{

    private url:string = "http://localhost:3060/api/WSForms";
    constructor(private http:HttpClient){ 
    }

    //Send a GET request to the server
    public getClientData():Observable<clientData>{
        return this.http.get<clientData>(this.url+"/client/"); 
    }

    public getMassageFormById(client_massage_form_id:number):Observable<any>{ 
        return this.http.get<any>(this.url+ '/' + client_massage_form_id);
    }


    public getMassageFormData():Observable<massageForm>{
        return this.http.get<massageForm>(this.url+"/massageForm/"); 
    }

    //Send a GET request to the server
    public getTreatmentData():Observable<treatmentData>{
        return this.http.get<treatmentData>(this.url+"/treatment/"); 
    
    }
    //Send a GET request to the server
    public getTeraphistData():Observable<therapistData>{
        return this.http.get<therapistData>(this.url+"/therapist/"); 
    }

    //Send a POST request to the server
    public setClientMassageForm(data:any):Observable<any>{ 
        return this.http.post(this.url+"/NewClientMassageForm/", data);
    } 
}