/*
Resume data for Kim Hastings (more or less)
 */
var bio = {
    "name": "Kim Hastings",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "glsa@aol.com",
        "github": "https://github.com/kimhastings/",
        "location": "John Day, Oregon"
    },
    "welcomeMessage": "Motto: Done is better than perfect",
    "skills": [
        "Wildlife biologist",
        "Code ninja",
        "Dog whisperer",
        "Night owl"
    ],
    "biopic": "images/owl.jpg",
    "display": function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $("#header").append(HTMLskills.replace("%data%", skill));
        });
    }
};
bio.display();

var work = {
    "jobs": [{
            "employer": "Yosemite National Park",
            "title": "Scientific Data Manager",
            "dates": "2009-present",
            "location": "El Portal, California",
            "description": "Attempt to do meaningful work"
        },
        {
            "employer": "U.S. Fish and Wildlife Service",
            "title": "Monitoring Cooordinator",
            "dates": "2001-2009",
            "location": "Juneau, Alaska",
            "description": "Actually did some meaningful work"
        },
        {
            "employer": "Tongass National Forest",
            "title": "Fish Biologist",
            "dates": "1994-2001",
            "location": "Petersburg, Alaska",
            "description": "Walked many, many streams"
        }

    ],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var workTitle = HTMLworkTitle.replace("%data%", job.title);
            var workDates = HTMLworkDates.replace("%data%", job.dates);
            var workLocation = HTMLworkLocation.replace("%data%", job.location);
            var workDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(workEmployer + workTitle, workDates + workLocation, workDescription);
        });
    }
};
work.display();

var projects = {
    "projects": [{
            "title": "Portfolio 1",
            "dates": "2017",
            "description": "First website that I built from scratch",
            "images": [
                "images/fry.jpg"
            ]
        },
        {
            "title": "Portfolio 2",
            "dates": "2017",
            "description": "Second website that I built from scratch",
            "images": [
                "images/fry.jpg"
            ]
        }
    ],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var projectDates = HTMLprojectDates.replace("%data%", project.dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(projectTitle, projectDates, projectDescription);
            project.images.forEach(function(image) {
                var projectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(projectImage);
            });
        });
    }
};
projects.display();

var education = {
    "schools": [{
            "name": "University of Montana",
            "degree": "Ph.D.",
            "dates": "1997-2005",
            "location": "Missoula, MT",
            "majors": ["Organismal Biology and Ecology"]
        },
        {
            "name": "University of Montana",
            "degree": "M.S.",
            "dates": "1994-1997",
            "location": "Missoula, MT",
            "majors": ["Forest Ecology"]
        },
        {
            "name": "Montana State University",
            "degree": "M.S.",
            "dates": "1979-1982",
            "location": "Bozeman, MT",
            "majors": ["Computer Science"]
        }
    ],
    "onlineCourses": [{
        "school": "Udacity",
        "url": "https://udacity.com",
        "dates": "2017-2017",
        "title": "Front End Web Development"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            var schoolName = HTMLschoolName.replace("%data%", school.name);
            var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var schoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(schoolName + schoolDegree, schoolDates + schoolLocation, schoolMajors);
        });
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            var onlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var onlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var onlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var onlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(onlineTitle + onlineSchool, onlineDates, onlineURL);
        });
    }
};
education.display();


/* Keep track of clicks on the page */
$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

/*$("#main").append(internationalizeButton);

function inName() {

	var name = bio.name.trim().split(' ', 2);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
};*/

$("#mapDiv").append(googleMap);
