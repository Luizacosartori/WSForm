import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { therapistData, clientData, treatmentData } from '../formsData';
import { dataService } from '../dataService';

@Component({
  selector: 'app-massage-form',
  templateUrl: './massage-form.component.html',
  styleUrls: ['./massage-form.component.css'],
})
export class MassageFormComponent implements OnInit {
  title = 'WSForms';
  therapists: therapistData[] = new Array();
  clients: clientData[] = new Array();
  treatments: treatmentData[] = new Array();
  step = 0;
  bodyIsChecked = new Map();

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
    gender_identity: new FormControl('', Validators.required),
    // hasHealth_insurance: new FormControl('', Validators.required),
    health_insurance: new FormControl('', Validators.required),
    health_insurance_other: new FormControl({ value: '', disabled: true }),
    emergency_contact_name: new FormControl('', Validators.required),
    emergency_contact_relationship: new FormControl('', Validators.required),
    emergency_contact_phone: new FormControl('', Validators.required),
    hear_about_us_online_search: new FormControl(''),
    hear_about_us_facebook: new FormControl(''),
    hear_about_us_instagram: new FormControl(''),
    hear_about_us_online_advertisement: new FormControl(''),
    hear_about_us_word_of_mouth: new FormControl(''),
    hear_about_us_friend_family: new FormControl(''),
    hear_about_us_healthcare_provider: new FormControl(''),
    hear_about_us_walked_by: new FormControl(''),
    taking_medication: new FormControl('', Validators.required),
    taking_medication_list: new FormControl({ value: '', disabled: true }),
    pregnant: new FormControl('', Validators.required),
    pregnant_how_far: new FormControl({ value: '', disabled: true }),
    pregnant_high_risk: new FormControl({ value: '', disabled: true }),
    chronic_pain: new FormControl('', Validators.required),
    chronic_pain_explanation: new FormControl({ value: '', disabled: true }),
    orthopedic_injuries: new FormControl('', Validators.required),
    orthopedic_injuries_list: new FormControl({ value: '', disabled: true }),
    hasCancer: new FormControl(''),
    hasHeadaches_migraines: new FormControl(''),
    hasArthritis: new FormControl(''),
    hasDiabetes: new FormControl(''),
    hasJoint_replacement: new FormControl(''),
    hasHigh_low_pressure: new FormControl(''),
    hasNeuropathy: new FormControl(''),
    hasFibromyalgia: new FormControl(''),
    hasStroke: new FormControl(''),
    hasHeart_attack: new FormControl(''),
    hasKidney_dysfunction: new FormControl(''),
    hasBlood_clots: new FormControl(''),
    hasNumbness: new FormControl(''),
    hasSprains_strains: new FormControl(''),
    conditions_explanation: new FormControl(''),
    had_professional_massage: new FormControl('', Validators.required),
    professional_massage_type: new FormControl(''),
    professional_massage_other: new FormControl(''),
    pressure_preference: new FormControl('', Validators.required),
    allergies_sensitivities: new FormControl('', Validators.required),
    allergies_sensitivities_explanation: new FormControl({
      value: '',
      disabled: true,
    }),
    goal_pain_relief: new FormControl(''),
    goal_stress_reduction: new FormControl(''),
    goal_increase_range_of_motion: new FormControl(''),
    goal_injury_rehabilitation: new FormControl(''),
    goal_improve_sleep: new FormControl(''),
    goal_increase_energy: new FormControl(''),
    goal_other: new FormControl(''),

    massage_frequency_weekly: new FormControl(''),
    massage_frequency_monthly: new FormControl(''),
    massage_frequency_random: new FormControl(''),
    massage_frequency_other: new FormControl(''),

    front_right_arm: new FormControl(false),
    front_right_hand: new FormControl(false),
    front_right_foot: new FormControl(false),
    front_right_calf: new FormControl(false),
    front_right_knee: new FormControl(false),
    front_right_thigh: new FormControl(false),
    front_left_foot: new FormControl(false),
    front_left_calf: new FormControl(false),
    front_left_knee: new FormControl(false),
    front_left_thigh: new FormControl(false),
    front_left_hand: new FormControl(false),
    front_left_arm: new FormControl(false),
    front_abdomen: new FormControl(false),
    front_chest: new FormControl(false),
    front_head: new FormControl(false),

    back_right_arm: new FormControl(false),
    back_right_leg: new FormControl(false),
    back_right_hip: new FormControl(false),
    back_right_shoulder: new FormControl(false),
    back_left_leg: new FormControl(false),
    back_left_arm: new FormControl(false),
    back_left_hip: new FormControl(false),
    back_left_shoulder: new FormControl(false),
    back_lower_back: new FormControl(false),
    back_head: new FormControl(false),

    client_signature: new FormControl('', Validators.required),
    client_signature_date: new FormControl('', Validators.required),
  });
  // Is this variable being used?
  notChecked = false;

  // disableSelect: new FormControl(false),
  //   health_insurance_none: new FormControl({
  //     value: '',
  //     disabled: this.disabled,

  constructor(private dataService: dataService, private render: Renderer2) {
    console.log(this.massageForm.value);
  }
  ngOnInit(): void {
    this.massageForm.controls.health_insurance.valueChanges.subscribe(
      (value) => {
        if (value != 'Other') {
          this.massageForm.controls.health_insurance_other.removeValidators(
            Validators.required
          );
          this.massageForm.controls.health_insurance_other.disable();
        } else {
          this.massageForm.controls.health_insurance_other.addValidators(
            Validators.required
          );
          this.massageForm.controls.health_insurance_other.enable();
        }
      }
    );

    this.massageForm.controls.taking_medication.valueChanges.subscribe(
      (value) => {
        if (value != 'Yes') {
          this.massageForm.controls.taking_medication_list.removeValidators(
            Validators.required
          );
          this.massageForm.controls.taking_medication_list.disable();
          this.massageForm.controls.taking_medication_list.reset();
        } else {
          this.massageForm.controls.taking_medication_list.addValidators(
            Validators.required
          );
          this.massageForm.controls.taking_medication_list.enable();
        }
      }
    );

    this.massageForm.controls.pregnant.valueChanges.subscribe((value) => {
      if (value != 'Yes') {
        this.massageForm.controls.pregnant_how_far.removeValidators(
          Validators.required
        );
        this.massageForm.controls.pregnant_how_far.disable();
        this.massageForm.controls.pregnant_how_far.reset();
      } else {
        this.massageForm.controls.pregnant_how_far.addValidators(
          Validators.required
        );
        this.massageForm.controls.pregnant_how_far.enable();
      }
      if (value != 'Yes') {
        this.massageForm.controls.pregnant_high_risk.removeValidators(
          Validators.required
        );
        this.massageForm.controls.pregnant_high_risk.disable();
        this.massageForm.controls.pregnant_high_risk.reset();
      } else {
        this.massageForm.controls.pregnant_high_risk.addValidators(
          Validators.required
        );
        this.massageForm.controls.pregnant_high_risk.enable();
      }
    });

    this.massageForm.controls.chronic_pain.valueChanges.subscribe((value) => {
      if (value != 'Yes') {
        this.massageForm.controls.chronic_pain_explanation.removeValidators(
          Validators.required
        );
        this.massageForm.controls.chronic_pain_explanation.disable();
        this.massageForm.controls.chronic_pain_explanation.reset();
      } else {
        this.massageForm.controls.chronic_pain_explanation.addValidators(
          Validators.required
        );
        this.massageForm.controls.chronic_pain_explanation.enable();
      }
    });

    this.massageForm.controls.orthopedic_injuries.valueChanges.subscribe(
      (value) => {
        if (value != 'Yes') {
          this.massageForm.controls.orthopedic_injuries_list.removeValidators(
            Validators.required
          );
          this.massageForm.controls.orthopedic_injuries_list.disable();
          this.massageForm.controls.orthopedic_injuries_list.reset();
        } else {
          this.massageForm.controls.orthopedic_injuries_list.addValidators(
            Validators.required
          );
          this.massageForm.controls.orthopedic_injuries_list.enable();
        }
      }
    );

    this.massageForm.controls.allergies_sensitivities.valueChanges.subscribe(
      (value) => {
        if (value != 'Yes') {
          this.massageForm.controls.allergies_sensitivities_explanation.removeValidators(
            Validators.required
          );
          this.massageForm.controls.allergies_sensitivities_explanation.disable();
          this.massageForm.controls.allergies_sensitivities_explanation.reset();
        } else {
          this.massageForm.controls.allergies_sensitivities_explanation.addValidators(
            Validators.required
          );
          this.massageForm.controls.allergies_sensitivities_explanation.enable();
        }
      }
    );

    // this.setStep(0);
    // throw new Error('Method not implemented.');
  }

  getData() {
    this.dataService.getTeraphistData().subscribe(
      (d: any) => {
        this.therapists = d;
      },
      (err: any) => {}
    );
    this.dataService.getClientData().subscribe(
      (d: any) => {
        this.clients = d;
      },
      (err: any) => {}
    );

    this.dataService.getTreatmentData().subscribe(
      (d: any) => {
        this.treatments = d;
      },
      (err: any) => {}
    );
  }

  onSubmit() {
    // if (this.massageForm.valid) {
    // console.log('Botao submit oi');
    this.dataService
      .setClientMassageForm(this.massageForm.value)
      .subscribe((res) => {
        this.massageForm.reset();
        alert('The Client Form has been added.');
      });
    // } else {
    //   alert('Please fill all the required fields.');
    // }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  selectBodyPart(event: any) {
    var bodyPartId = event.target.id + '';

    if (event.target.classList.contains('human_body_part_selected')) {
      this.render.removeClass(event.target, 'human_body_part_selected');
      this.bodyIsChecked.set(event.target.id, false);
    } else {
      // event.target.getAttribute('formControlName').setValue(true);
      // event.target.value = true;
      // this.massageForm.controls[event.target.id];
      // this.bodyIsChecked.set(event.target.value, true);
      this.massageForm.get(event.target.id)?.setValue(true);

      this.render.addClass(event.target, 'human_body_part_selected');
      this.bodyIsChecked.set(event.target.id, true);
    }
  }
}
