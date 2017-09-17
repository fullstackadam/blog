
// load project data

// controller
var octopus = {
	getProjects: function() {
		// download from github or google sheet
		// if github must filter projects to be shown

		vm.addProject({
			name: 'Refundo',
			description: 'A tax engine',
			image: 'http://placehold.it/350x180',
			liveURL: '#',
			repoURL: '#',
		});
	}
};

// view model

function ViewModel() {
	var self = this;
	self.projects = ko.observableArray([]);
	self.addProject = function(project) {
		self.projects.push(new Project(project));
	};
}

function Project(project) {
	var self = this;
	self.name = ko.observable(project.name);
	self.description = ko.observable(project.description);
	self.image = ko.observable(project.image);
	self.liveURL = ko.observable(project.name);
	self.repoURL = ko.observable(project.repoURL);
}

var vm = new ViewModel();

$(function(){
	ko.applyBindings(vm);

	octopus.getProjects();
});
