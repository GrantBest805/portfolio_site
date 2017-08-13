//  Bio Object
var bio = {
	"name": "Grant Best",
	"role": "Full Stack Web Developer",
	"skills": ["JavaScript", "Node.js", "Angular", "HTML5", "CSS3", "Bootstrap", "Ruby on Rails", ""],
	"contacts": {
		"mobile": "801-556-1841",
		"email": "grantstoolbox@gmail.com",
		"github": "GrantBest805",
		"linkedin": "grant-best",
		"location": "Ventura, California"
	},
	"welcome": "Welcome to my resume dynamically created with JavaScript ! I am a Entrepreneurial minded developer with the ability to create fully responsive Web Sites and Applications, from Design to Database Structure.",
	"biopic": "images/Linkedin_Pro.jpg",
	display: () => {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedMessage);


		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
		var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedLinkedin;
		$("#topContacts").append(formattedContact);
		// Append to Footer
		$("#footerContacts").append(formattedContact);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};
// Display Bio
bio.display();

//  Work Experience Object
var work = {
	jobs: [
		{
			"employer": "Best Flooring, inc.",
			"title": "Founder/Owner",
			"dates": "April 2008 - Jan 2017",
			"location": "Salt Lake City, Utah",
			"description": "At Best Fooring, inc. Being one of Utahs Top Flooring Companies. Our motto was, Customers First! We also pride oureselves of our attention to detail. My responsibilities as Owner - <br>•Marketing •Business Startup • Sales • Design • Customer Service • Project Management"
		},
		{
			"title": "Co-Founder",
			"employer": "Best Builders & Design, inc.",
			"dates": "July 2013 - October 2015",
			"location": "Salt Lake City, Utah",
			"description": "Home Remodel and Design Company. Responsibilities - <br>•Marketing •Design •Business Startup •Customer Satisfaction •Project Management"
		},
		{
			"title": "Co-Founder",
			"employer": "Green Coastal Cleaning",
			"dates": "Feb 2017",
			"location": "Ventura, California",
			"description": "Green Coastal Cleaning is a Residential Home Cleaning Company I Helped Start.Responsibilities - <br> •Marketing •Startup"
		}
	],
	display: () => {
		$("#workExperience").append(HTMLworkStart);
		for (var x = 0; x < work.jobs.length; x++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
			$(".work-entry").append(formattedLocation);
			var formattedWorkInfo = formattedDates + formattedDescription;
			$(".work-entry").append(formattedWorkInfo);

		}
	}
};
// Display Work History
work.display();

// Education Object
var education = {
	schools: [
		{
			"name": "Coding Dojo",
			"dates": "February 2017 - July 2017",
			"degree": "Full Stack Development Certificate",
			"majors": ["Web Development"],
			"location": "Burbank, California",
		},
		{
			"name": "Udacity",
			"dates": "June 2017 - August 2017",
			"degree": "Front-End nanodegree",
			"majors": ["Front-End Web Development"],
			"location": "Ventura, California",
		},
	],
	onlineCourses: [
		{
			"title": "Responsive Websites",
			"school": "Udacity",
			"dates": "June 2017",
			"url": "https://www.udacity.com/"
		},
		{
			"title": "JavaScript ",
			"school": "Udacity",
			"dates": "July 2017",
			"url": "https://www.udacity.com/"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "July 2017",
			"url": "https://www.udacity.com/"
		},
		{
			"title": "Version Control , Git Github",
			"school": "Udacity",
			"dates": "June 2017",
			"url": "https://www.udacity.com/",
		},
	],
	display: () => {
		$("#education").append(HTMLschoolStart);
		for(var i = 0; i < education.schools.length; i++) {

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattesEducation = formattedSchoolName + formattedSchoolDate + formattedSchoolLocation;
			$(".education-entry:last").append(formattesEducation);
			for(var x = 0; x < education.schools[i].majors.length; x++){
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[x]);
				$(".education-entry:last").append(formattedMajor);
			}


		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for(var j = 0; j < education.onlineCourses.length; j++) {
			formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry").append(formattedOnlineDates);

		}
	}
};
// Display education
education.display();


var projects = {
	projects: [
		{
			"title": "Dock It",
			"date": "May 2017",
			"description": "Dock_It is a working mockup of a scheduling app for small businesses. The Idea is to get rid of the clipboard hanging in the break room. Create a Group for your company, give your employees the group ID and thats it! Now the Group admin can create Positions and fill those positions with events. (Built with Ruby on Rails using RESTFull API) Currently Working on full version, Integrating Full Calendar.",
			"images": ["images/resize_dockit.png"]
		},
		{
			"title": "Portfolio Page",
			"date": "July 2017",
			"description": "My Portfolio Page Is a Simple, Fully Responsive Design. With the help of a great tools like Gulp and FlexBox this site is Responsive and Minimized, for a Great Development and User experience.",
			"images": ['images/resize_portfolio.png']
		},
		{
			"title": "MEAN topics",
			"date": "April 2017",
			"description": "MEAN Topics is a simple Blog application, built with Node.js, Angluar, Express and MongoDB, using RESTful API's and CRUD operations. Users can create topics, Post on a topic and also Comment on Posts.",
			"images": ['images/rsz_topics.png']
		}
	],
	display: () => {
		for (var p = 0; p < projects.projects.length; p++) {
			$("#projects").append(HTMLprojectStart);
			var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
			var projectDates = HTMLprojectDates.replace("%data%", projects.projects[p].date);
			var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
			var formattedProject = projectTitle + projectDates + projectDescription;
			$(".project-entry:last").append(formattedProject);
			$(".project-entry").find("a").attr('href', 'https://grantbest805.github.io/porfolio/');
			for(var i = 0; i < projects.projects[p].images.length; i++){
				var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
				$(".project-entry:last").append(formattedimage);
			}

			}
	}
};

//  Display Projects
projects.display();


// internationalize Name
function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// Display locations with google Map Api
$("#mapDiv").append(googleMap);
