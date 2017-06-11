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
				"title" : "Portfolio 1",
				"dates" : "2017",
				"description" : "First website that I built from scratch",
				"images" : [
					"images/fry.jpg"
				]
		},
		{
				"title" : "Portfolio 2",
				"dates" : "2017",
				"description" : "First website that I built from scratch",
				"images" : [
					"images/fry.jpg"
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
		},
		{
				"name" : "Montana State University",
				"degree" : "M.S.",
				"dates" : "1979-1982",
				"location" : "Bozeman, MT",
				"major" : "Computer Science"
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

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var workEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var workTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var workDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var workDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(workEmployer + workTitle, workDates, workDescription);
	};
};

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var projectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(projectTitle, projectDates, projectDescription);
		for (image in projects.projects[project].images) {
			var projectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(projectImage);
		};
	};
};

projects.display();

/* Keep track of clicks on the page */
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

/*$("#workExperience").append(HTMLworkStart);
work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkEmployer.replace("%data%",job.employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%",job.title));
    $("#workExperience").append(HTMLworkDates.replace("%data%",job.dates));
    $("#workExperience").append(HTMLworkLocation.replace("%data%",job.location));
    $("#workExperience").append(HTMLworkDescription.replace("%data%",job.description));
});

$("#education").append(HTMLschoolStart);
education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolName.replace("%data%",school.name));
    $("#education").append(HTMLschoolDegree.replace("%data%",school.degree));
    $("#education").append(HTMLschoolDates.replace("%data%",school.dates));
    $("#education").append(HTMLschoolLocation.replace("%data%",school.location));
    $("#education").append(HTMLschoolMajor.replace("%data%",school.major));
});*/

/*$("#main").append(internationalizeButton);

function inName() {

	var name = bio.name.trim().split(' ', 2);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
};*/


