/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Kim Hastings",
    "role" : "Web Developer",
    "contacts" : {
				"mobile" : 555-555-5555,
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

// $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
// $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

// $("#header").append(HTMLemail.replace("%data%",bio.contacts["email"]));
// $("#header").append(HTMLgithub.replace("%data%",bio.contacts["github"]));
// $("#header").append(HTMLlocation.replace("%data%",bio.contacts["location"]));

// $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
// $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));
// $("#header").append(HTMLskillsStart);
// bio.skills.forEach(function(skill) {
    // $("#header").append(HTMLskills.replace("%data%",skill));
// });

var work = {
	"jobs": [
		{
				"employer" : "Yosemite National Park",
				"title" : "Scientific Data Manager",
				"dates" : "2009-present",
				"location" : "El Portal, California",
				"description" : "Herded cats mostly"
		},
		{
				"employer" : "U.S. Fish and Wildlife Service",
				"title" : "Tongas Monitoring Cooordinator",
				"dates" : "2001-2009",
				"location" : "Juneau, Alaska",
				"description" : "Ran with the big dogs"
		}
	]
};

var projects = {
	"projects": [
		{
				"title" : "Portfolio",
				"dates" : "2017",
				"description" : "First website that I built from scratch",
				"images" : [
					"http://kimhastings.github.io/portfolio/"
				]
		}
	]
};

var education = {
	"schools": [
		{
				"name" : "University of Montana",
				"degree" : "Ph.D.",
				"dates" : "1997-2005",
				"location" : "Missoula, MT",
				"major" : "Organismal Biology and Ecology"
		},
		{
				"name" : "University of Montana",
				"degree" : "M.S.",
				"dates" : "1994-1997",
				"location" : "Missoula, MT",
				"major" : "Forest Ecology"
		}
	],
	"onlineCourses": [
		{
				"school" : "Udacity",
				"url" : "https://udacity.com",
				"dates" : "2017",
				"title" : "Front End Web Development"
		}
	]
};

// $("#workExperience").append(HTMLworkStart);
// workExperience.forEach(function(job) {
    // $("#workExperience").append(HTMLworkEmployer.replace("%data%",job.employer));
    // $("#workExperience").append(HTMLworkTitle.replace("%data%",job.title));
    // $("#workExperience").append(HTMLworkDates.replace("%data%",job.dates));
    // $("#workExperience").append(HTMLworkLocation.replace("%data%",job.location));
    // $("#workExperience").append(HTMLworkDescription.replace("%data%",job.description));
// });

// $("#education").append(HTMLschoolStart);
// education.forEach(function(school) {
    // $("#education").append(HTMLschoolName.replace("%data%",school.name));
    // $("#education").append(HTMLschoolDegree.replace("%data%",school.degree));
    // $("#education").append(HTMLschoolDates.replace("%data%",school.dates));
    // $("#education").append(HTMLschoolLocation.replace("%data%",school.location));
    // $("#education").append(HTMLschoolMajor.replace("%data%",school.major));
// });