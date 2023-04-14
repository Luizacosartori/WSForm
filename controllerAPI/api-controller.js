var dbcon = require("../database");
var connection = dbcon.getconnection();
connection.connect();

var express = require("../WSForms/node_modules/express");
var router = express.Router();

router.get("/therapist/", (request, response) => {
    connection.query("SELECT * FROM therapist", (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data");
        } else {
            response.send(records);
        }
    })
})

router.get("/client/", (request, response) => {
    connection.query("SELECT * FROM client", (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data");
        } else {
            response.send(records);
        }
    })
})

router.get("/treatment/", (request, response) => {
    connection.query('SELECT tr.treatment_id as treatment_id, concat(c.firstName, " ", c.lastName) as clientName, th.fullName as therapistName, trn.treatment_notes_id as treatment_notes_id, trn.treatment_date as treatment_date, trn.treatment_notes as treatment_notes FROM treatment tr JOIN client c on c.client_id = tr.client_id JOIN therapist th on th.therapist_id = tr.therapist_id JOIN treatment_notes trn on tr.treatment_notes_id = trn.treatment_notes_id', 
    (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data");
        } else {
            response.send(records);
        }
    })
})

router.post("/NewClientMassageForm/", (req, res)=>{
    var full_name = req.body.full_name;
    var date_of_birth = req.body.date_of_birth;
    var address = req.body.address;
    var suburb = req.body.suburb;
    var state = req.body.state;
    var postal_code = req.body.postal_code;
    var occupation = req.body.occupation;
    var email = req.body.email;
    var phone = req.body.phone;
    var health_insurance = req.body.health_insurance;
    var health_insurance_other = req.body.health_insurance_other;
    var emergency_contact_name = req.body.emergency_contact_name;
    var emergency_contact_relationship = req.body.emergency_contact_relationship;
    var emergency_contact_phone = req.body.emergency_contact_phone;
    var hear_about_us_online_search = req.body.hear_about_us_online_search;
    var hear_about_us_word_of_mouth = req.body.hear_about_us_word_of_mouth;
    var hear_about_us_facebook = req.body.hear_about_us_facebook;
    var hear_about_us_friend_family = req.body.hear_about_us_friend_family;
    var hear_about_us_instagram = req.body.hear_about_us_instagram;
    var hear_about_us_healthcare_provider = req.body.hear_about_us_healthcare_provider;
    var hear_about_us_online_advertisement = req.body.hear_about_us_online_advertisement;
    var hear_about_us_walked_by = req.body.hear_about_us_walked_by;
    var taking_medication = req.body.taking_medication;
    var taking_medication_list = req.body.taking_medication_list;
    var pregnant = req.body.pregnant;
    var pregnant_how_far = req.body.pregnant_how_far;
    var pregnant_high_risk = req.body.pregnant_high_risk;
    var chronic_pain = req.body.chronic_pain;
    var chronic_pain_explanation = req.body.chronic_pain_explanation;
    var orthopedic_injuries = req.body.orthopedic_injuries;
    var orthopedic_injuries_list = req.body.orthopedic_injuries_list;
    var hasCancer = req.body.hasCancer;
    var hasFibromyalgia = req.body.hasFibromyalgia;
    var hasHeadaches_migraines = req.body.hasHeadaches_migraines;
    var hasStroke = req.body.hasStroke;
    var hasArthritis = req.body.hasArthritis;
    var hasHeart_attack = req.body.hasHeart_attack;
    var hasDiabetes = req.body.hasDiabetes;
    var hasKidney_dysfunction = req.body.hasKidney_dysfunction;
    var hasJoint_replacement = req.body.hasJoint_replacement;
    var hasBlood_clots = req.body.hasBlood_clots;
    var hasHigh_low_pressure = req.body.hasHigh_low_pressure;
    var hasNumbness = req.body.hasNumbness;
    var hasNeuropathy = req.body.hasNeuropathy;
    var hasSprains_strains = req.body.hasSprains_strains;
    var conditions_explanation = req.body.conditions_explanation;
    var had_professional_massage = req.body.had_professional_massage;
    var professional_massage_type = req.body.professional_massage_type;
    var professional_massage_other = req.body.professional_massage_other;
    var pressure_preference = req.body.pressure_preference;
    var allergies_sensitivities = req.body.allergies_sensitivities;
    var allergies_sensitivities_explanation = req.body.allergies_sensitivities_explanation;
    var goal_pain_relief = req.body.goal_pain_relief;
    var goal_stress_reduction = req.body.goal_stress_reduction;
    var goal_increase_range_of_motion = req.body.goal_increase_range_of_motion;
    var goal_injury_rehabilitation = req.body.goal_injury_rehabilitation;
    var goal_improve_sleep = req.body.goal_improve_sleep;
    var goal_increase_energy = req.body.goal_increase_energy;
    var areas_of_disconfort = req.body.areas_of_disconfort;
    var client_signature = req.body.client_signature;
    var client_signature_date = req.body.client_signature_date;
    var expiry_date = req.body.expiry_date;

    //Remove after areas get implemented:
    areas_of_disconfort = "1";
    
    //remove after calculating expiry date:
    date_of_birth = "2023-04-14";
    expiry_date = date_of_birth;
    client_signature_date = date_of_birth;


    console.log(req.body);

    console.log("INSERT INTO Client_Massage_Form(client_id,full_name,date_of_birth,address,suburb,state,postal_code,occupation,,email,phone,health_insurance,health_insurance_other,emergency_contact_name,emergency_contact_relationship,emergency_contact_phone,hear_about_us_online_search,hear_about_us_word_of_mouth,hear_about_us_facebook,hear_about_us_friend_family,hear_about_us_instagram,hear_about_us_healthcare_provider,hear_about_us_online_advertisement,hear_about_us_walked_by,taking_medication,taking_medication_list,pregnant,pregnant_how_far,pregnant_high_risk,chronic_pain,chronic_pain_explanation,orthopedic_injuries,orthopedic_injuries_list,hasCancer,hasFibromyalgia,hasHeadaches_migraines,hasStroke,hasArthritis,hasHeart_attack,hasDiabetes,hasKidney_dysfunction,hasJoint_replacement,hasBlood_clots,hasHigh_low_pressure,hasNumbness,hasNeuropathy,hasSprains_strains,conditions_explanation,had_professional_massage,professional_massage_type,professional_massage_other,pressure_preference,allergies_sensitivities,allergies_sensitivities_explanation,goal_pain_relief,goal_stress_reduction,goal_increase_range_of_motion,goal_injury_rehabilitation,goal_improve_sleep,goal_increase_energy,areas_of_disconfort,client_signature,client_signature_date,expiry_date)"+
    " VALUES(1,'"+
    full_name+"','"+date_of_birth+"','"+address+"','"+suburb+"','"+state+"','"+postal_code+"','"+occupation+"','"+email+"','"+phone+"','"+
    health_insurance+"','"+health_insurance_other+"','"+emergency_contact_name+"','"+emergency_contact_relationship+"','"+emergency_contact_phone+"',"+
    hear_about_us_online_search+","+hear_about_us_word_of_mouth+","+hear_about_us_facebook+","+hear_about_us_friend_family+","+hear_about_us_instagram+","+
    hear_about_us_healthcare_provider+","+hear_about_us_online_advertisement+","+hear_about_us_walked_by+",'"+taking_medication+"','"+taking_medication_list+"','"+pregnant+"',"+
    pregnant_how_far+",'"+pregnant_high_risk+"','"+chronic_pain+"','"+chronic_pain_explanation+"','"+orthopedic_injuries+"','"+orthopedic_injuries_list+"',"+hasCancer+","+
    hasFibromyalgia+","+hasHeadaches_migraines+","+hasStroke+","+hasArthritis+","+hasHeart_attack+","+hasDiabetes+","+hasKidney_dysfunction+","+hasJoint_replacement+","+
    hasBlood_clots+","+hasHigh_low_pressure+","+hasNumbness+","+hasNeuropathy+","+hasSprains_strains+",'"+conditions_explanation+"','"+had_professional_massage+"','"+
    professional_massage_type+"','"+professional_massage_other+"','"+pressure_preference+"','"+allergies_sensitivities+"','"+
    allergies_sensitivities_explanation+"',"+goal_pain_relief+","+goal_stress_reduction+","+goal_increase_range_of_motion+","+goal_injury_rehabilitation+","+
    goal_improve_sleep+","+goal_increase_energy+",'"+areas_of_disconfort+"','"+client_signature+"','"+client_signature_date+"','"+expiry_date+"')");

	connection.query("INSERT INTO Client_Massage_Form(client_id,full_name,date_of_birth,address,suburb,state,postal_code,occupation,email,phone,health_insurance,health_insurance_other,emergency_contact_name,emergency_contact_relationship,emergency_contact_phone,hear_about_us_online_search,hear_about_us_word_of_mouth,hear_about_us_facebook,hear_about_us_friend_family,hear_about_us_instagram,hear_about_us_healthcare_provider,hear_about_us_online_advertisement,hear_about_us_walked_by,taking_medication,taking_medication_list,pregnant,pregnant_how_far,pregnant_high_risk,chronic_pain,chronic_pain_explanation,orthopedic_injuries,orthopedic_injuries_list,hasCancer,hasFibromyalgia,hasHeadaches_migraines,hasStroke,hasArthritis,hasHeart_attack,hasDiabetes,hasKidney_dysfunction,hasJoint_replacement,hasBlood_clots,hasHigh_low_pressure,hasNumbness,hasNeuropathy,hasSprains_strains,conditions_explanation,had_professional_massage,professional_massage_type,professional_massage_other,pressure_preference,allergies_sensitivities,allergies_sensitivities_explanation,goal_pain_relief,goal_stress_reduction,goal_increase_range_of_motion,goal_injury_rehabilitation,goal_improve_sleep,goal_increase_energy,areas_of_disconfort,client_signature,client_signature_date,expiry_date)"+
        " VALUES(1,'"+
        full_name+"','"+date_of_birth+"','"+address+"','"+suburb+"','"+state+"','"+postal_code+"','"+occupation+"','"+email+"','"+phone+"','"+
        health_insurance+"','"+health_insurance_other+"','"+emergency_contact_name+"','"+emergency_contact_relationship+"','"+emergency_contact_phone+"',"+
        hear_about_us_online_search+","+hear_about_us_word_of_mouth+","+hear_about_us_facebook+","+hear_about_us_friend_family+","+hear_about_us_instagram+","+
        hear_about_us_healthcare_provider+","+hear_about_us_online_advertisement+","+hear_about_us_walked_by+",'"+taking_medication+"','"+taking_medication_list+"','"+pregnant+"',"+
        pregnant_how_far+",'"+pregnant_high_risk+"','"+chronic_pain+"','"+chronic_pain_explanation+"','"+orthopedic_injuries+"','"+orthopedic_injuries_list+"',"+hasCancer+","+
        hasFibromyalgia+","+hasHeadaches_migraines+","+hasStroke+","+hasArthritis+","+hasHeart_attack+","+hasDiabetes+","+hasKidney_dysfunction+","+hasJoint_replacement+","+
        hasBlood_clots+","+hasHigh_low_pressure+","+hasNumbness+","+hasNeuropathy+","+hasSprains_strains+",'"+conditions_explanation+"','"+had_professional_massage+"','"+
        professional_massage_type+"','"+professional_massage_other+"','"+pressure_preference+"','"+allergies_sensitivities+"','"+
        allergies_sensitivities_explanation+"',"+goal_pain_relief+","+goal_stress_reduction+","+goal_increase_range_of_motion+","+goal_injury_rehabilitation+","+
        goal_improve_sleep+","+goal_increase_energy+",'"+areas_of_disconfort+"','"+client_signature+"','"+client_signature_date+"','"+expiry_date+"')",
	(err, result)=> {
		 if (err){
			 console.error("Error while Updating the data" + err);
		 }else{
			 res.send({update:"success"});
		 }
	})
})

// router.put("/UpdateClientMassageForm/", (req, res)=>{
// 	var client_id = req.body.client_id;
//     var full_name = req.body.full_name;
//     var date_of_birth = req.body.date_of_birth;
//     var address = req.body.address;
//     var suburb = req.body.suburb;
//     var state = req.body.state;
//     var postal_code = req.body.postal_code;
//     var occupation = req.body.occupation;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     var health_insurance = req.body.health_insurance;
//     var health_insurance_other = req.body.health_insurance_other;
//     var emergency_contact_name = req.body.emergency_contact_name;
//     var emergency_contact_relationship = req.body.emergency_contact_relationship;
//     var emergency_contact_phone = req.body.emergency_contact_phone;
//     var hear_about_us_online_search = req.body.hear_about_us_online_search;
//     var hear_about_us_word_of_mouth = req.body.hear_about_us_word_of_mouth;
//     var hear_about_us_facebook = req.body.hear_about_us_facebook;
//     var hear_about_us_friend_family = req.body.hear_about_us_friend_family;
//     var hear_about_us_instagram = req.body.hear_about_us_instagram;
//     var hear_about_us_healthcare_provider = req.body.hear_about_us_healthcare_provider;
//     var hear_about_us_online_advertisement = req.body.hear_about_us_online_advertisement;
//     var hear_about_us_walked_by = req.body.hear_about_us_walked_by;
//     var taking_medication = req.body.taking_medication;
//     var taking_medication_list = req.body.taking_medication_list;
//     var pregnant = req.body.pregnant;
//     var pregnant_how_far = req.body.pregnant_how_far;
//     var pregnant_high_risk_factor = req.body.pregnant_high_risk_factor;
//     var chronic_pain = req.body.chronic_pain;
//     var chronic_pain_explanation = req.body.chronic_pain_explanation;
//     var orthopedic_injuries = req.body.orthopedic_injuries;
//     var orthopedic_injuries_list = req.body.orthopedic_injuries_list;
//     var hasCancer = req.body.hasCancer;
//     var hasFibromyalgia = req.body.hasFibromyalgia;
//     var hasHeadaches_migraines = req.body.hasHeadaches_migraines;
//     var hasStroke = req.body.hasStroke;
//     var hasArthritis = req.body.hasArthritis;
//     var hasHeart_attack = req.body.hasHeart_attack;
//     var hasDiabetes = req.body.hasDiabetes;
//     var hasKidney_dysfunction = req.body.hasKidney_dysfunction;
//     var hasJoint_replacement = req.body.hasJoint_replacement;
//     var hasBlood_clots = req.body.hasBlood_clots;
//     var hasHigh_low_pressure = req.body.hasHigh_low_pressure;
//     var hasNumbness = req.body.hasNumbness;
//     var hasNeuropathy = req.body.hasNeuropathy;
//     var hasSprains_strains = req.body.hasSprains_strains;
//     var conditions_explanation = req.body.conditions_explanation;
//     var had_professional_massage = req.body.had_professional_massage;
//     var type_of_professional_massage = req.body.type_of_professional_massage;
//     var type_of_professional_massage_other = req.body.type_of_professional_massage_other;
//     var pressure_preference = req.body.pressure_preference;
//     var allergies_sensitivities = req.body.allergies_sensitivities;
//     var allergies_sensitivities_explanation = req.body.allergies_sensitivities_explanation;
//     var areas_of_disconfort = req.body.areas_of_disconfort;
//     var client_signature = req.body.client_signature;
//     var client_signature_date = req.body.client_signature_date;
//     var expiry_date = req.body.expiry_date;


// 	connection.query("UPDATE book SET "+
//         "',full_name='"+full_name+"',date_of_birth='"+date_of_birth+"',address='"+address+"',suburb='"+suburb+"',state='"+state+"',postal_code='"+postal_code+"',occupation='"+occupation+
//         "',email='"+email+"',phone='"+phone+"',health_insurance='"+health_insurance+"'health_insurance_other='"+health_insurance_other+
//         "',emergency_contact_name='"+emergency_contact_name+"',emergency_contact_relationship='"+emergency_contact_relationship+"',emergency_contact_phone='"+emergency_contact_phone+
//         "',hear_about_us_online_search="+hear_about_us_online_search+",hear_about_us_word_of_mouth="+hear_about_us_word_of_mouth+",hear_about_us_facebook="+hear_about_us_facebook+
//         ",hear_about_us_friend_family="+hear_about_us_friend_family+",hear_about_us_instagram="+hear_about_us_instagram+",hear_about_us_healthcare_provider="+hear_about_us_healthcare_provider+
//         ",hear_about_us_online_advertisement="+hear_about_us_online_advertisement+",hear_about_us_walked_by="+hear_about_us_walked_by+",taking_medication="+taking_medication+
//         ",taking_medication_list='"+taking_medication_list+"',pregnant="+pregnant+",pregnant_how_far="+pregnant_how_far+",pregnant_high_risk_factor='"+pregnant_high_risk_factor+
//         "',chronic_pain="+chronic_pain+",chronic_pain_explanation='"+chronic_pain_explanation+"',orthopedic_injuries="+orthopedic_injuries+",orthopedic_injuries_list='"+orthopedic_injuries_list+
//         "',hasCancer="+hasCancer+",hasFibromyalgia="+hasFibromyalgia+",hasHeadaches_migraines="+hasHeadaches_migraines+",hasStroke="+hasStroke+",hasArthritis="+hasArthritis+
//         ",hasHeart_attack="+hasHeart_attack+",hasDiabetes="+hasDiabetes+",hasKidney_dysfunction="+hasKidney_dysfunction+",hasJoint_replacement="+hasJoint_replacement+
//         ",hasBlood_clots="+hasBlood_clots+",hasHigh_low_pressure="+hasHigh_low_pressure+",hasNumbness="+hasNumbness+",hasNeuropathy="+hasNeuropathy+",hasSprains_strains="+hasSprains_strains+
//         ",conditions_explanation='"+conditions_explanation+"',had_professional_massage="+had_professional_massage+",type_of_professional_massage='"+type_of_professional_massage+
//         "',type_of_professional_massage_other='"+type_of_professional_massage_other+"',pressure_preference='"+pressure_preference+"',allergies_sensitivities="+allergies_sensitivities+
//         ",allergies_sensitivities_explanation='"+allergies_sensitivities_explanation+",goal_pain_relief="+goal_pain_relief+",goal_stress_reduction="+goal_stress_reduction+
//         ",goal_increase_range_of_motion="+goal_increase_range_of_motion+",goal_injury_rehabilitation="+goal_injury_rehabilitation+",goal_improve_sleep="+goal_improve_sleep+
//         ",goal_increase_energy="+goal_increase_energy+",areas_of_disconfort='"+areas_of_disconfort+"',client_signature='"+client_signature+
//         "',client_signature_date='"+client_signature_date+"',expiry_date='"+expiry_date+"' WHERE client_id="+client_id,
// 	(err, result)=> {
// 		 if (err){
// 			 console.error("Error while Updating the data" + err);
// 		 }else{
// 			 res.send({update:"success"});
// 		 }
// 	})
// })

// router.post("/", (request, response) => {
//     this.connect.query("SELECT * FROM therapists")=>{
//         if (err) {
//             console.log("Error when retriving the data");
//         } else {
//             response.send(records);
//         }
//     }
// })

// router.delete("/", (request, response) => {
//     this.connect.query()
// })

module.exports = router;