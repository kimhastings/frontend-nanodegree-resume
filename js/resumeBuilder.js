/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Kim Hastings",
    "role" : "Web Developer",
    "contacts" : {
        "email" : "kim@stikine.org",
        "github" : "https://github.com/kimhastings/",
        "location" : "Sierra Foothills"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMsg" : "Motto: Done is better than perfect",
    "skills" : [
        "Awesomeness", "Speaks dog"
    ]
};

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

$("#header").append(HTMLemail.replace("%data%",bio.contacts["email"]));
$("#header").append(HTMLgithub.replace("%data%",bio.contacts["github"]));
$("#header").append(HTMLlocation.replace("%data%",bio.contacts["location"]));

$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));
$("#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill) {
    $("#header").append(HTMLskills.replace("%data%",skill));
});

var workExperience = {
    "workEmployer" : "Yosemite National Park",
    "workTitle" : "Scientific Data Manager",
    "workDates" : "2009-present",
    "workLocation" : "El Portal, CA",
    "workDescription" : "Herded cats mostly"
};

var education = {
    "schoolName" : "University of Montana",
    "schoolDegree" : "Ph. D.",
    "schoolDates" : "1994-2005",
    "schoolLocation" : "Missoula, MT",
    "schoolMajor" : "Organismal Biology and Ecology"
}

$("#workExperience").append(HTMLworkEmployer.replace("%data%",workExperience.workEmployer));
$("#workExperience").append(HTMLworkTitle.replace("%data%",workExperience.workTitle));
$("#workExperience").append(HTMLworkDates.replace("%data%",workExperience.workDates));
$("#workExperience").append(HTMLworkLocation.replace("%data%",workExperience.workLocation));
$("#workExperience").append(HTMLworkDescription.replace("%data%",workExperience.workDescription));
