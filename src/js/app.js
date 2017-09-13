
// load project data

// controller
var octopus = {
	getProjects: function() {
		// download from github or google sheet
		// if github must filter projects to be shown
	}
};

// view model

var ViewModel = {
	projects: ko.observableArray([]),
	addProject: function(project) {
		projects.push(new Project(project));
	}
};

var Project = function(project) {
	var self = this;
	self.name = ko.observable(project.name);
	self.description = ko.observable(project.description);
	self.image = ko.observable(project.image);
	self.liveURL = ko.observable(project.name);
	self.repoURL = ko.observable(project.repoURL);
};

ko.applyBindings();