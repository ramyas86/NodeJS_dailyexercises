#Step #1 in SQL Murder Mystery: Narrow Down Crime Scenes by Date and City
SELECT description FROM crime_scene_report
WHERE date = '20180115' AND type = 'murder' AND city = 'SQL City';

#Step #2 in SQL Murder Mystery: Identify First Witness's Location
SELECT *
FROM person
WHERE address_street_name = "Northwestern Dr"
ORDER BY address_number DESC;

#Step #3 in SQL Murder Mystery: Locate Second Witness by Name and Address
SELECT *
FROM person
WHERE name LIKE '%Annabel%'
AND address_street_name = "Franklin Ave";

#Step #4 in SQL Murder Mystery: Review Witness Interviews
SELECT *
FROM interview
WHERE person_id IN ("14887", "16371");

#Step #5 in SQL Murder Mystery: Check Gym Check-Ins using Clues
SELECT *
FROM get_fit_now_check_in
WHERE membership_id LIKE '48Z%'
	AND check_in_date = "20180109";
    
#Step #6 in SQL Murder Mystery: Verify Gender and Car Plate Number
SELECT *
FROM drivers_license
WHERE gender = "male"
	AND plate_number LIKE '%H42W%';

#Step #7 in SQL Murder Mystery: Gather Additional Details on Persons
SELECT *
FROM person
WHERE license_id IN ("423327", "664760");

#Step #8 in SQL Murder Mystery: Finalize Suspect Identification
SELECT *
FROM get_fit_now_member
WHERE person_id IN ("51739", "67318");

#Step #9 in SQL Murder Mystery: Confirm Solution in the Database
INSERT INTO solution VALUES (1, 'Jeremy Bowers'); 
SELECT value FROM solution;

#Step #10 in SQL Murder Mystery: Review The Murderer's Interview
SELECT *
FROM interview
WHERE person_id = "67318";

#Step #11 in SQL Murder Mystery: Identify Tesla Model S Owners
SELECT *
FROM drivers_license
WHERE gender = "female"
	AND hair_color = "red"
	AND height BETWEEN 65 AND 67
	AND car_make = "Tesla"
	AND car_model = "Model S";

#Step #12 in SQL Murder Mystery: Retrieve Personal Details of Potential Suspects
SELECT *
FROM person
WHERE license_id IN ("202298", "291182", "918773");

#Step #13 in SQL Murder Mystery: Determine SQL Symphony Concert Attendees
SELECT 
	person_id, 
    event_name, 
    COUNT(*) AS event_count
FROM facebook_event_checkin
WHERE person_id IN ("78881", "90700", "99716")
GROUP BY person_id, event_name;

#Step #14 in SQL Murder Mystery: Confirm The Culprit
INSERT INTO solution VALUES (1, 'Miranda Priestly');
SELECT value FROM solution;