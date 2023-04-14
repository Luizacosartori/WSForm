import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { therapistData, clientData, treatmentData } from './formsData';
import { dataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WSForms';
  therapists: therapistData[] = new Array();
  clients: clientData[] = new Array();
  treatments: treatmentData[] = new Array();

  massageForm = new FormGroup({
    full_name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required),
    suburb: new FormControl('', Validators.required),
    postal_code: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    postCode: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    medications: new FormControl('', Validators.required),
    employer: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    health_insurance: new FormControl('', Validators.required),
    health_insurance_other: new FormControl(''),
    emergency_contact_name: new FormControl('', Validators.required),
    emergency_contact_relationship: new FormControl('', Validators.required),
    emergency_contact_phone: new FormControl('', Validators.required),
    hear_about_us_online_search: new FormControl(),
    hear_about_us_facebook: new FormControl(),
    hear_about_us_instagram: new FormControl(),
    hear_about_us_online_advertisement: new FormControl(),
    hear_about_us_word_of_mouth: new FormControl(),
    hear_about_us_friend_family: new FormControl(),
    hear_about_us_healthcare_provider: new FormControl(),
    hear_about_us_walked_by: new FormControl(),
    taking_medication: new FormControl('', Validators.required),
    taking_medication_list: new FormControl('', Validators.required),
    pregnant: new FormControl('', Validators.required),
    pregnant_how_far: new FormControl('', Validators.required),
    pregnant_high_risk: new FormControl('', Validators.required),
    chronic_pain: new FormControl('', Validators.required),
    chronic_pain_explanation: new FormControl('', Validators.required),
    orthopedic_injuries: new FormControl('', Validators.required),
    orthopedic_injuries_list: new FormControl('', Validators.required),
    hasCancer: new FormControl(),
    hasHeadaches_migraines: new FormControl(),
    hasArthritis: new FormControl(),
    hasDiabetes: new FormControl(),
    hasJoint_replacement: new FormControl(),
    hasHigh_low_pressure: new FormControl(),
    hasNeuropathy: new FormControl(),
    hasFibromyalgia: new FormControl(),
    hasStroke: new FormControl(),
    hasHeart_attack: new FormControl(),
    hasKidney_dysfunction: new FormControl(),
    hasBlood_clots: new FormControl(),
    hasNumbness: new FormControl(),
    hasSprains_strains: new FormControl(),
    conditions_explanation: new FormControl('', Validators.required),
    had_professional_massage: new FormControl('', Validators.required),
    professional_massage_type: new FormControl('', Validators.required),
    professional_massage_other: new FormControl('', Validators.required),
    pressure_preference: new FormControl('', Validators.required),
    allergies_sensitivities: new FormControl('', Validators.required),
    allergies_sensitivities_explanation: new FormControl('', Validators.required),
    goal_pain_relief: new FormControl(),
    goal_stress_reduction: new FormControl(),
    goal_increase_range_of_motion: new FormControl(),
    goal_injury_rehabilitation: new FormControl(),
    goal_improve_sleep: new FormControl(),
    goal_increase_energy: new FormControl(),
    client_signature: new FormControl('', Validators.required),
    client_signature_date: new FormControl('', Validators.required)
  });
  notChecked = false;

  constructor(private dataService: dataService) {
    console.log(this.massageForm.value)
  }

  getData() {
    this.dataService.getTeraphistData().subscribe(
      (d: any) => {
        this.therapists = d;
      },
      (err: any) => { }
    );
    this.dataService.getClientData().subscribe(
      (d: any) => {
        this.clients = d;
      },
      (err: any) => { }
    );
    this.dataService.getTreatmentData().subscribe(
      (d: any) => {
        this.treatments = d;
      },
      (err: any) => { }
    );
  }

  onSubmit() {
    // if(this.massageForm.valid){
      this.dataService.setClientMassageForm(this.massageForm.value).subscribe((res)=>{
        this.massageForm.reset();
        alert("The Client Form has been added.");
      });
    // }else{
    //   alert("fix it");
    // }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  
}
