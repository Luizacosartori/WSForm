var dbcon = require("../database");
var mindbodyAPI = require("../mindbody");

var connection = dbcon.getconnection();
connection.connect();

var express = require("../WSForms/node_modules/express");
var router = express.Router();


// Mindbody API
router.post("/login/", (request, response) => {
    mindbodyAPI.login(request.body.username, request.body.password, function (AccessToken) {
        connection.query("INSERT INTO currentuser VALUES('" + request.body.username + "','" + AccessToken + "') ON DUPLICATE KEY UPDATE AccessToken = '" + AccessToken + "'");
        if(AccessToken){
            response.send({username: request.body.username});
        }else{
            response.send("Failed to Login");
        }
    });
});

router.post("/getStaff/", (request, response) => {
    connection.query("SELECT accesstoken FROM currentuser WHERE username = '" + request.body.username + "'", (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data", err)
        } else {
            mindbodyAPI.getStaff(records[0].accesstoken, function (staff) {
                staff.StaffMembers.forEach(s => {
                    if (s.AppointmentInstructor) {
                        connection.query("INSERT INTO staff VALUES (" + s.Id + ",'" + s.Name + "') ON DUPLICATE KEY UPDATE full_name = '" + s.Name + "'", (err) => {
                            if (err) {
                                console.log("Error when inserting the client data", err);
                            }
                        });
                    }
                })
            });
        }
    });
});

router.post("/getClientTreatment/", (request, response) => {
    connection.query("SELECT accesstoken FROM currentuser WHERE username = '" + request.body.username + "'", (err, records, fields) => {
        if (err) {
            console.log("Error when retriving the data", err);
        } else {
            mindbodyAPI.getTreatments(records[0].accesstoken, function (treatments) {
                for (let index = 0; index < (treatments.Appointments.length/20); index++) {
                    mindbodyAPI.getClient(records[0].accesstoken, treatments.Appointments.slice((index*20),(((index*20)+20))), function (client) {
                        client.Clients.forEach(c => {
                            connection.query((`INSERT INTO client VALUES (` + c.Id + `,"` + c.FirstName + `","` + c.MiddleName + `","` + c.LastName + `","` + c.MobilePhone + `","` + c.Email + `") ON DUPLICATE KEY UPDATE first_name = "` + c.FirstName + `", middle_name = "` + c.MiddleName + `",last_name = "` + c.LastName + `",mobile_phone ="` + c.MobilePhone + `",email = "` + c.Email + `"`).replace("'","''"), (err) => {
                                if (err) {
                                    console.log("Error when inserting the client data", err);
                                }
                            });
                        });
                    });
                };
                treatments.Appointments.forEach(t => {
                    connection.query("INSERT INTO treatment(treatment_id,client_id,staff_id,treatment_StartDateTime,treatment_EndDateTime) VALUES (" + t.Id + "," + t.ClientId + "," + t.StaffId + ",'" + t.StartDateTime + "','" + t.EndDateTime + "') ON DUPLICATE KEY UPDATE client_id = " + t.ClientId + ",staff_id = " + t.StaffId + ",treatment_StartDateTime = '" + t.StartDateTime + "',treatment_EndDateTime = '" + t.EndDateTime + "'", (err) => {
                        if (err) {
                            console.log("Error when inserting the treatment data", err);
                        }
                    });
                });
            });
        }
    });
});

// Whitestone System
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
    var newDate = new Date().toLocaleDateString('sv-SE');
    //This sv-SE is to return the correct date format YYYY-MM-DD, it might be changed in the future 
    connection.query('SELECT * from `treatment` where date(`treatment_StartDateTime`) ="' + newDate + '" ORDER BY treatment_StartDateTime ASC',
        (err, records, fields) => {
            if (err) {
                console.log(err);
            } else {
                response.send(records);
            }
        })
})

router.get("/treatment/:id", (request, response) => {
    connection.query("SELECT * from `treatment` where client_id =" + request.params.id,
        (err, records, fields) => {
            if (err) {
                console.log(err);
                console.log(newDate)
            } else {
                response.send(records);
            }
        })
})

router.get("/massageForm/", (request, response) => {
    connection.query('SELECT * FROM client_massage_form ',
        (err, records, fields) => {
            if (err) {
                console.log("Error when retriving the data");
            } else {
                response.send(records);
            }
        })
})

router.get("/:id", (req, res) => {
    connection.query("SELECT * FROM client_massage_form  WHERE client_id=" + req.params.id, (err, records, fields) => {
        if (err) {
            console.error("Error while retrieve the data");
        } else {
            console.log("records: ", records);
            res.send(records);
        }
    })
})

router.post("/NewClientMassageForm/", (req, res) => {
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

    console.log("INSERT INTO Client_Massage_Form(client_id,full_name,date_of_birth,address,suburb,state,postal_code,occupation,,email,phone,health_insurance,health_insurance_other,emergency_contact_name,emergency_contact_relationship,emergency_contact_phone,hear_about_us_online_search,hear_about_us_word_of_mouth,hear_about_us_facebook,hear_about_us_friend_family,hear_about_us_instagram,hear_about_us_healthcare_provider,hear_about_us_online_advertisement,hear_about_us_walked_by,taking_medication,taking_medication_list,pregnant,pregnant_how_far,pregnant_high_risk,chronic_pain,chronic_pain_explanation,orthopedic_injuries,orthopedic_injuries_list,hasCancer,hasFibromyalgia,hasHeadaches_migraines,hasStroke,hasArthritis,hasHeart_attack,hasDiabetes,hasKidney_dysfunction,hasJoint_replacement,hasBlood_clots,hasHigh_low_pressure,hasNumbness,hasNeuropathy,hasSprains_strains,conditions_explanation,had_professional_massage,professional_massage_type,professional_massage_other,pressure_preference,allergies_sensitivities,allergies_sensitivities_explanation,goal_pain_relief,goal_stress_reduction,goal_increase_range_of_motion,goal_injury_rehabilitation,goal_improve_sleep,goal_increase_energy,areas_of_disconfort,client_signature,client_signature_date,expiry_date)" +
        " VALUES(1,'" +
        full_name + "','" + date_of_birth + "','" + address + "','" + suburb + "','" + state + "','" + postal_code + "','" + occupation + "','" + email + "','" + phone + "','" +
        health_insurance + "','" + health_insurance_other + "','" + emergency_contact_name + "','" + emergency_contact_relationship + "','" + emergency_contact_phone + "'," +
        hear_about_us_online_search + "," + hear_about_us_word_of_mouth + "," + hear_about_us_facebook + "," + hear_about_us_friend_family + "," + hear_about_us_instagram + "," +
        hear_about_us_healthcare_provider + "," + hear_about_us_online_advertisement + "," + hear_about_us_walked_by + ",'" + taking_medication + "','" + taking_medication_list + "','" + pregnant + "'," +
        pregnant_how_far + ",'" + pregnant_high_risk + "','" + chronic_pain + "','" + chronic_pain_explanation + "','" + orthopedic_injuries + "','" + orthopedic_injuries_list + "'," + hasCancer + "," +
        hasFibromyalgia + "," + hasHeadaches_migraines + "," + hasStroke + "," + hasArthritis + "," + hasHeart_attack + "," + hasDiabetes + "," + hasKidney_dysfunction + "," + hasJoint_replacement + "," +
        hasBlood_clots + "," + hasHigh_low_pressure + "," + hasNumbness + "," + hasNeuropathy + "," + hasSprains_strains + ",'" + conditions_explanation + "','" + had_professional_massage + "','" +
        professional_massage_type + "','" + professional_massage_other + "','" + pressure_preference + "','" + allergies_sensitivities + "','" +
        allergies_sensitivities_explanation + "'," + goal_pain_relief + "," + goal_stress_reduction + "," + goal_increase_range_of_motion + "," + goal_injury_rehabilitation + "," +
        goal_improve_sleep + "," + goal_increase_energy + ",'" + areas_of_disconfort + "','" + client_signature + "','" + client_signature_date + "','" + expiry_date + "')");

    connection.query("INSERT INTO Client_Massage_Form(client_id,full_name,date_of_birth,address,suburb,state,postal_code,occupation,email,phone,health_insurance,health_insurance_other,emergency_contact_name,emergency_contact_relationship,emergency_contact_phone,hear_about_us_online_search,hear_about_us_word_of_mouth,hear_about_us_facebook,hear_about_us_friend_family,hear_about_us_instagram,hear_about_us_healthcare_provider,hear_about_us_online_advertisement,hear_about_us_walked_by,taking_medication,taking_medication_list,pregnant,pregnant_how_far,pregnant_high_risk,chronic_pain,chronic_pain_explanation,orthopedic_injuries,orthopedic_injuries_list,hasCancer,hasFibromyalgia,hasHeadaches_migraines,hasStroke,hasArthritis,hasHeart_attack,hasDiabetes,hasKidney_dysfunction,hasJoint_replacement,hasBlood_clots,hasHigh_low_pressure,hasNumbness,hasNeuropathy,hasSprains_strains,conditions_explanation,had_professional_massage,professional_massage_type,professional_massage_other,pressure_preference,allergies_sensitivities,allergies_sensitivities_explanation,goal_pain_relief,goal_stress_reduction,goal_increase_range_of_motion,goal_injury_rehabilitation,goal_improve_sleep,goal_increase_energy,areas_of_disconfort,client_signature,client_signature_date,expiry_date)" +
        " VALUES(1,'" +
        full_name + "','" + date_of_birth + "','" + address + "','" + suburb + "','" + state + "','" + postal_code + "','" + occupation + "','" + email + "','" + phone + "','" +
        health_insurance + "','" + health_insurance_other + "','" + emergency_contact_name + "','" + emergency_contact_relationship + "','" + emergency_contact_phone + "'," +
        hear_about_us_online_search + "," + hear_about_us_word_of_mouth + "," + hear_about_us_facebook + "," + hear_about_us_friend_family + "," + hear_about_us_instagram + "," +
        hear_about_us_healthcare_provider + "," + hear_about_us_online_advertisement + "," + hear_about_us_walked_by + ",'" + taking_medication + "','" + taking_medication_list + "','" + pregnant + "'," +
        pregnant_how_far + ",'" + pregnant_high_risk + "','" + chronic_pain + "','" + chronic_pain_explanation + "','" + orthopedic_injuries + "','" + orthopedic_injuries_list + "'," + hasCancer + "," +
        hasFibromyalgia + "," + hasHeadaches_migraines + "," + hasStroke + "," + hasArthritis + "," + hasHeart_attack + "," + hasDiabetes + "," + hasKidney_dysfunction + "," + hasJoint_replacement + "," +
        hasBlood_clots + "," + hasHigh_low_pressure + "," + hasNumbness + "," + hasNeuropathy + "," + hasSprains_strains + ",'" + conditions_explanation + "','" + had_professional_massage + "','" +
        professional_massage_type + "','" + professional_massage_other + "','" + pressure_preference + "','" + allergies_sensitivities + "','" +
        allergies_sensitivities_explanation + "'," + goal_pain_relief + "," + goal_stress_reduction + "," + goal_increase_range_of_motion + "," + goal_injury_rehabilitation + "," +
        goal_improve_sleep + "," + goal_increase_energy + ",'" + areas_of_disconfort + "','" + client_signature + "','" + client_signature_date + "','" + expiry_date + "')",
        (err, result) => {
            if (err) {
                console.error("Error while Updating the data" + err);
            } else {
                res.send({ update: "success" });
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

router.post("/NewNotesForm/:id", (req, res) => {
    var front_of_body = req.body.front_of_body;
    var back_of_body = req.body.back_of_body;
    var pressure = req.body.pressure;
    var treatment_notes = req.body.treatment_notes;
    var treatment_plan = req.body.treatment_plan;
    var supraspinatus = req.body.supraspinatus;
    var biceps_femoris = req.body.biceps_femoris;
    var gracialis = req.body.gracialis;
    var tibialis_anterior = req.body.tibialis_anterior;
    var quadriceps = req.body.quadriceps;
    var soleus = req.body.soleus;
    var gastrocnemius = req.body.gastrocnemius;
    var teres_major_minor = req.body.teres_major_minor;
    var adductor_magnus = req.body.adductor_magnus;
    var tfl = req.body.tfl;
    var iliopsoas = req.body.iliopsoas;
    var sartorius = req.body.sartorius;
    var glut_mid = req.body.glut_mid;
    var glut_max = req.body.glut_max;
    var serratus = req.body.serratus;
    var triceps_brachii = req.body.triceps_brachii;
    var biceps_brachii = req.body.biceps_brachii;
    var pec_major = req.body.pec_major;
    var deltoids = req.body.deltoids;
    var trapezius = req.body.trapezius;
    var rhomboids = req.body.rhomboids;
    var elavator_scapulae = req.body.elavator_scapulae;
    var ect = req.body.ect;
    var lat_dorsi = req.body.lat_dorsi;
    var erect_spinae = req.body.erect_spinae;

    connection.query("UPDATE treatment SET pressure='" + pressure + "', front_of_body='" + front_of_body + "', back_of_body='" + back_of_body + "',treatment_notes='" + treatment_notes + "',treatment_plan='" + treatment_plan + "', supraspinatus=" + supraspinatus + ",biceps_femoris=" + biceps_femoris + ",gracialis=" + gracialis + ",quadriceps=" + quadriceps + ",tibialis_anterior=" + tibialis_anterior + ",gastrocnemius=" + gastrocnemius + ",soleus=" + soleus + ",sartorius=" + sartorius + ",iliopsoas=" + iliopsoas + ",tfl=" + tfl + ",adductor_magnus=" + adductor_magnus + ",teres_major_minor=" + teres_major_minor + ",biceps_brachii=" + biceps_brachii + ",triceps_brachii=" + triceps_brachii + ",serratus=" + serratus + ",glut_max=" + glut_max + ",glut_mid=" + glut_mid + ",elavator_scapulae=" + elavator_scapulae +
        ", trapezius=" + trapezius + ", pec_major=" + pec_major + ", deltoids=" + deltoids + ", rhomboids=" + rhomboids + ", erect_spinae=" + erect_spinae + ", lat_dorsi=" + lat_dorsi + ", ect=" + ect + " WHERE treatment_id=" + req.params.id,
        (err, result) => {
            if (err) {
                console.error("Error while Updating the data" + err);
            } else {
                res.send({ update: "success" });
            }
        })
})

module.exports = router;