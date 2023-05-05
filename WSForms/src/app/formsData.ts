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

export class massageForm {
    client_id: number;
    client_massage_form_id: number;
    full_name: string;
    date_of_birth: Date;
    address: string;
    suburb: string;
    state: string;
    postal_code: number;
    occupation: string;
    email: string;
    phone: number;
    health_insurance: string;
    health_insurance_other: string;
    emergency_contact_name: string;
    emergency_contact_relationship: string;
    emergency_contact_phone: number;
    hear_about_us_online_search: string;
    hear_about_us_word_of_mouth: string;
    hear_about_us_facebook: string;
    hear_about_us_friend_family: string;
    hear_about_us_instagram: string;
    hear_about_us_healthcare_provider: string;
    hear_about_us_online_advertisement: string;
    hear_about_us_walked_by: string;
    taking_medication: string;
    taking_medication_list: string;
    pregnant: string;
    pregnant_how_far: number;
    pregnant_high_risk: string;
    chronic_pain: string;
    chronic_pain_explanation: string;
    orthopedic_injuries: string;
    orthopedic_injuries_list: string;
    hasCancer: string;
    hasFibromyalgia: string;
    hasHeadaches_migraines: string;
    hasStroke: string;
    hasArthritis: string;
    hasHeart_attack: string;
    hasDiabetes: string;
    hasKidney_dysfunction: string;
    hasJoint_replacement: string;
    hasBlood_clots: string;
    hasHigh_low_pressure: string;
    hasNumbness: string;
    hasNeuropathy: string;
    hasSprains_strains: string;
    conditions_explanation: string;
    had_professional_massage: string;
    professional_massage_type: string;
    professional_massage_other: string;
    pressure_preference: string;
    allergies_sensitivities: string;
    allergies_sensitivities_explanation: string;
    goal_pain_relief: string;
    goal_stress_reduction: string;
    goal_increase_range_of_motion: string;
    goal_injury_rehabilitation: string;
    goal_improve_sleep: string;
    goal_increase_energy: string;
    areas_of_disconfort: string;
    client_signature: string;
    client_signature_date: Date;
    expiry_date: Date;

    constructor(full_name: string, date_of_birth: Date, address: string, suburb: string, state: string,
        postal_code: number, occupation: string, email: string, phone: number, health_insurance: string, health_insurance_other: string,
        emergency_contact_name: string, emergency_contact_relationship: string, emergency_contact_phone: number,
        hear_about_us_online_search: string, hear_about_us_word_of_mouth: string, hear_about_us_facebook: string, hear_about_us_friend_family: string,
        hear_about_us_instagram: string, hear_about_us_healthcare_provider: string, hear_about_us_walked_by: string, taking_medication: string,
        taking_medication_list: string, hear_about_us_online_advertisement: string, pregnant: string, pregnant_how_far: number, pregnant_high_risk: string,
        chronic_pain: string, chronic_pain_explanation: string, orthopedic_injuries: string, orthopedic_injuries_list: string,
        hasCancer: string, hasFibromyalgia: string, hasHeadaches_migraines: string, hasKidney_dysfunction: string, hasDiabetes: string,
        hasHeart_attack: string, hasArthritis: string, hasStroke: string, hasNeuropathy: string, hasNumbness: string, hasHigh_low_pressure: string,
        hasBlood_clots: string, hasJoint_replacement: string, professional_massage_other: string, professional_massage_type: string,
        had_professional_massage: string, conditions_explanation: string, hasSprains_strains: string, goal_stress_reduction: string,
        goal_pain_relief: string, allergies_sensitivities_explanation: string, allergies_sensitivities: string, pressure_preference: string,
        goal_increase_energy: string, goal_improve_sleep: string, goal_injury_rehabilitation: string, goal_increase_range_of_motion: string,
        expiry_date: Date, client_signature_date: Date, client_signature: string, areas_of_disconfort: string, client_massage_form_id: number,
        client_id: number) {

        this.client_id = client_id;
        this.client_massage_form_id = client_massage_form_id;

        this.full_name = full_name;
        this.date_of_birth = date_of_birth;
        this.address = address;
        this.suburb = suburb;
        this.state = state;
        this.postal_code = postal_code;
        this.occupation = occupation;
        this.email = email;
        this.phone = phone;
        this.health_insurance = health_insurance;
        this.health_insurance_other = health_insurance_other;
        this.emergency_contact_name = emergency_contact_name;
        this.emergency_contact_relationship = emergency_contact_relationship;
        this.emergency_contact_phone = emergency_contact_phone;
        this.hear_about_us_online_search = hear_about_us_online_search;
        this.hear_about_us_word_of_mouth = hear_about_us_word_of_mouth;
        this.hear_about_us_facebook = hear_about_us_facebook;
        this.hear_about_us_friend_family = hear_about_us_friend_family;
        this.hear_about_us_instagram = hear_about_us_instagram;
        this.hear_about_us_healthcare_provider = hear_about_us_healthcare_provider;
        this.hear_about_us_online_advertisement = hear_about_us_online_advertisement;
        this.hear_about_us_walked_by = hear_about_us_walked_by;
        this.taking_medication = taking_medication;
        this.taking_medication_list = taking_medication_list;
        this.pregnant = pregnant;
        this.pregnant_how_far = pregnant_how_far;
        this.pregnant_high_risk = pregnant_high_risk;
        this.chronic_pain = chronic_pain;
        this.chronic_pain_explanation = chronic_pain_explanation;
        this.orthopedic_injuries = orthopedic_injuries;
        this.orthopedic_injuries_list = orthopedic_injuries_list;
        this.hasCancer = hasCancer;
        this.hasFibromyalgia = hasFibromyalgia;
        this.hasHeadaches_migraines = hasHeadaches_migraines;
        this.hasStroke = hasStroke;
        this.hasArthritis = hasArthritis;
        this.hasHeart_attack = hasHeart_attack;
        this.hasDiabetes = hasDiabetes;
        this.hasKidney_dysfunction = hasKidney_dysfunction;
        this.hasJoint_replacement = hasJoint_replacement;
        this.hasBlood_clots = hasBlood_clots;
        this.hasHigh_low_pressure = hasHigh_low_pressure;
        this.hasNumbness = hasNumbness;
        this.hasNeuropathy = hasNeuropathy;
        this.hasSprains_strains = hasSprains_strains;
        this.conditions_explanation = conditions_explanation;
        this.had_professional_massage = had_professional_massage;
        this.professional_massage_type = professional_massage_type;
        this.professional_massage_other = professional_massage_other;
        this.pressure_preference = pressure_preference;
        this.allergies_sensitivities = allergies_sensitivities;
        this.allergies_sensitivities_explanation = allergies_sensitivities_explanation;
        this.goal_pain_relief = goal_pain_relief;
        this.goal_stress_reduction = goal_stress_reduction;
        this.goal_increase_range_of_motion = goal_increase_range_of_motion;
        this.goal_injury_rehabilitation = goal_injury_rehabilitation;
        this.goal_improve_sleep = goal_improve_sleep;
        this.goal_increase_energy = goal_increase_energy;
        this.areas_of_disconfort = areas_of_disconfort;
        this.client_signature = client_signature;
        this.client_signature_date = client_signature_date;
        this.expiry_date = expiry_date;

        //Remove after areas get implemented:
        this.areas_of_disconfort = "1";

        // //remove after calculating expiry date:
        // this.date_of_birth = "2023-04-14";
        // this.expiry_date = date_of_birth;
        // this.client_signature_date = date_of_birth;
    }

}