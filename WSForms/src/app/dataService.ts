import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { formsData } from "./formsData";

@Injectable()
export class dataService{

    private url:string = "http://localhost:3060/api/WSForms";
    constructor(private http:HttpClient){ 
    }

    //Send a GET request to the server
    public getPacientData():Observable<formsData>{
       return this.http.get<formsData>(this.url); 
    }
}