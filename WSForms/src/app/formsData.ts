export class therapistData {
  therapist_id: number;
  fullName: string;

  constructor(i: number, n: string) {
    this.therapist_id = i;
    this.fullName = n;
  }
}

export class clientData {
  firstName: string;
  middleName: string;
  lastName: string;
  mobile_phone: string;
  email: string;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    mobile_phone: string,
    email: string
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.mobile_phone = mobile_phone;
    this.email = email;
  }
}

export class treatmentData {
  treatment_id: number;
  staff_id: number;
  client_id: number;
  treatment_StartDateTime: Date;
  treatment_notes: string;
  pressure: string;
  back_of_body: string;
  front_of_body: string;
  treatment_plan: string;
  supraspinatus: string;
  biceps_femoris: string;
  gracialis: string;
  tibialis_anterior: string;
  quadriceps: string;
  soleus: string;
  gastrocnemius: string;
  teres_major_minor: string;
  adductor_magnus: string;
  tfl: string;
  iliopsoas: string;
  sartorius: string;
  glut_mid: string;
  glut_max: string;
  serratus: string;
  triceps_brachii: string;
  biceps_brachii: string;
  pec_major: string;
  deltoids: string;
  trapezius: string;
  rhomboids: string;
  elavator_scapulae: string;
  ect: string;
  lat_dorsi: string;
  erect_spinae: string;
  full_name: string;
  occupation: string;

  constructor(
    full_name: string,
    occupation: string,
    treatment_plan: string,
    supraspinatus: string,
    biceps_femoris: string,
    gracialis: string,
    tibialis_anterior: string,
    quadriceps: string,
    soleus: string,
    gastrocnemius: string,
    teres_major_minor: string,
    adductor_magnus: string,
    tfl: string,
    iliopsoas: string,
    sartorius: string,
    glut_mid: string,
    glut_max: string,
    serratus: string,
    triceps_brachii: string,
    biceps_brachii: string,
    pec_major: string,
    deltoids: string,
    trapezius: string,
    rhomboids: string,
    elavator_scapulae: string,
    ect: string,
    lat_dorsi: string,
    erect_spinae: string,
    pressure: string,
    back_of_body: string,
    front_of_body: string,
    treatment_id: number,
    client_id: number,
    staff_id: number,
    treatment_StartDateTime: Date,
    treatment_notes: string
  ) {
    this.treatment_plan = treatment_plan;
    this.supraspinatus = supraspinatus;
    this.biceps_femoris = biceps_femoris;
    this.gracialis = gracialis;
    this.tibialis_anterior = tibialis_anterior;
    this.quadriceps = quadriceps;
    this.soleus = soleus;
    this.gastrocnemius = gastrocnemius;
    this.teres_major_minor = teres_major_minor;
    this.adductor_magnus = adductor_magnus;
    this.tfl = tfl;
    this.iliopsoas = iliopsoas;
    this.sartorius = sartorius;
    this.glut_mid = glut_mid;
    this.glut_max = glut_max;
    this.serratus = serratus;
    this.triceps_brachii = triceps_brachii;
    this.biceps_brachii = biceps_brachii;
    this.pec_major = pec_major;
    this.deltoids = deltoids;
    this.trapezius = trapezius;
    this.rhomboids = rhomboids;
    this.elavator_scapulae = elavator_scapulae;
    this.ect = ect;
    this.lat_dorsi = lat_dorsi;
    this.erect_spinae = erect_spinae;
    this.treatment_id = treatment_id;
    this.staff_id = staff_id;
    this.treatment_notes = treatment_notes;
    this.treatment_StartDateTime = treatment_StartDateTime;
    this.client_id = client_id;
    this.pressure = pressure;
    this.back_of_body = back_of_body;
    this.front_of_body = front_of_body;
    this.full_name = full_name;
    this.occupation = occupation;
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
  gender_identity: string;
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
  goal_other: string;
  massage_frequency_weekly: string;
  massage_frequency_monthly: string;
  massage_frequency_random: string;
  massage_frequency_other: string;
  front_right_arm: string;
  front_right_hand: string;
  front_right_foot: string;
  front_right_calf: string;
  front_right_knee: string;
  front_right_thigh: string;
  front_left_foot: string;
  front_left_calf: string;
  front_left_knee: string;
  front_left_thigh: string;
  front_left_hand: string;
  front_left_arm: string;
  front_abdomen: string;
  front_chest: string;
  front_head: string;
  back_right_arm: string;
  back_right_leg: string;
  back_right_hip: string;
  back_right_shoulder: string;
  back_left_leg: string;
  back_left_arm: string;
  back_left_hip: string;
  back_left_shoulder: string;
  back_lower_back: string;
  back_head: string;

  client_signature: string;
  client_signature_date: Date;
  expiry_date: Date;

  constructor(
    full_name: string,
    date_of_birth: Date,
    address: string,
    suburb: string,
    state: string,
    postal_code: number,
    occupation: string,
    email: string,
    phone: number,
    gender_identity: string,
    health_insurance: string,
    health_insurance_other: string,
    emergency_contact_name: string,
    emergency_contact_relationship: string,
    emergency_contact_phone: number,
    hear_about_us_online_search: string,
    hear_about_us_word_of_mouth: string,
    hear_about_us_facebook: string,
    hear_about_us_friend_family: string,
    hear_about_us_instagram: string,
    hear_about_us_healthcare_provider: string,
    hear_about_us_walked_by: string,
    taking_medication: string,
    taking_medication_list: string,
    hear_about_us_online_advertisement: string,
    pregnant: string,
    pregnant_how_far: number,
    pregnant_high_risk: string,
    chronic_pain: string,
    chronic_pain_explanation: string,
    orthopedic_injuries: string,
    orthopedic_injuries_list: string,
    hasCancer: string,
    hasFibromyalgia: string,
    hasHeadaches_migraines: string,
    hasKidney_dysfunction: string,
    hasDiabetes: string,
    hasHeart_attack: string,
    hasArthritis: string,
    hasStroke: string,
    hasNeuropathy: string,
    hasNumbness: string,
    hasHigh_low_pressure: string,
    hasBlood_clots: string,
    hasJoint_replacement: string,
    professional_massage_other: string,
    professional_massage_type: string,
    had_professional_massage: string,
    conditions_explanation: string,
    hasSprains_strains: string,
    goal_stress_reduction: string,
    goal_pain_relief: string,
    allergies_sensitivities_explanation: string,
    allergies_sensitivities: string,
    pressure_preference: string,
    goal_increase_energy: string,
    goal_improve_sleep: string,
    goal_injury_rehabilitation: string,
    goal_increase_range_of_motion: string,
    goal_other: string,
    massage_frequency_weekly: string,
    massage_frequency_monthly: string,
    massage_frequency_random: string,
    massage_frequency_other: string,
    front_right_arm: string,
    front_right_hand: string,
    front_right_foot: string,
    front_right_calf: string,
    front_right_knee: string,
    front_right_thigh: string,
    front_left_foot: string,
    front_left_calf: string,
    front_left_knee: string,
    front_left_thigh: string,
    front_left_hand: string,
    front_left_arm: string,
    front_abdomen: string,
    front_chest: string,
    front_head: string,
    back_right_arm: string,
    back_right_leg: string,
    back_right_hip: string,
    back_right_shoulder: string,
    back_left_leg: string,
    back_left_arm: string,
    back_left_hip: string,
    back_left_shoulder: string,
    back_lower_back: string,
    back_head: string,

    expiry_date: Date,
    client_signature_date: Date,
    client_signature: string,
    client_massage_form_id: number,
    client_id: number
  ) {
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
    this.gender_identity = gender_identity;
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
    this.hear_about_us_online_advertisement =
      hear_about_us_online_advertisement;
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
    this.allergies_sensitivities_explanation =
      allergies_sensitivities_explanation;
    this.goal_pain_relief = goal_pain_relief;
    this.goal_stress_reduction = goal_stress_reduction;
    this.goal_increase_range_of_motion = goal_increase_range_of_motion;
    this.goal_injury_rehabilitation = goal_injury_rehabilitation;
    this.goal_improve_sleep = goal_improve_sleep;
    this.goal_increase_energy = goal_increase_energy;
    this.goal_other = goal_other;
    this.massage_frequency_weekly = massage_frequency_weekly;
    this.massage_frequency_monthly = massage_frequency_monthly;
    this.massage_frequency_random = massage_frequency_random;
    this.massage_frequency_other = massage_frequency_other;
    this.front_right_arm = front_right_arm;
    this.front_right_hand = front_right_hand;
    this.front_right_foot = front_right_foot;
    this.front_right_calf = front_right_calf;
    this.front_right_knee = front_right_knee;
    this.front_right_thigh = front_right_thigh;
    this.front_left_foot = front_left_foot;
    this.front_left_calf = front_left_calf;
    this.front_left_knee = front_left_knee;
    this.front_left_thigh = front_left_thigh;
    this.front_left_hand = front_left_hand;
    this.front_left_arm = front_left_arm;
    this.front_abdomen = front_abdomen;
    this.front_chest = front_chest;
    this.front_head = front_head;
    this.back_right_arm = back_right_arm;
    this.back_right_leg = back_right_leg;
    this.back_right_hip = back_right_hip;
    this.back_right_shoulder = back_right_shoulder;
    this.back_left_leg = back_left_leg;
    this.back_left_arm = back_left_arm;
    this.back_left_hip = back_left_hip;
    this.back_left_shoulder = back_left_shoulder;
    this.back_lower_back = back_lower_back;
    this.back_head = back_head;
    this.client_signature = client_signature;
    this.client_signature_date = client_signature_date;
    this.expiry_date = expiry_date;

    //Remove after areas get implemented:
    // this.areas_of_disconfort = '1';

    // //remove after calculating expiry date:
    // this.date_of_birth = "2023-04-14";
    // this.expiry_date = date_of_birth;
    // this.client_signature_date = date_of_birth;
  }
}
