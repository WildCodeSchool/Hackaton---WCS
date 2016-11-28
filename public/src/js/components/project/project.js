((app) => {

    app.component('project', {
         bindings: {
            project: '<'
         },
        templateUrl: 'src/js/components/project/project.html',
        controller: ['projectsService', '$stateParams', function(projectsService, $stateParams) {
            angular.extend(this, {
                $onInit() {

                  let _previous = {}

                  this.limit = 1;
                  this.begin = 0;

                  this.date = new Date();
                    projectsService.get().then((res) => {
                        this.projects = res.data

                        // Extraction de l'id passé en paramètre
                        let id = $stateParams.projectId
                        this.projects.forEach((element) => {

                            if (element._id === id) {
                                this.projects = element
                                console.log(this.projects)
                            }
                        })
                    })


                    // Update on Window Learn more
                    this.update = (project) => {
                        if (project.editMode) {
                            project.PublishedAt =  Math.round(this.date.getTime() / 1000)

                            projectsService.edit(project).then((res) => {
                                this.project = res.config.data
                                project.editMode = false
                            })

                        } else {
                            _previous[project._id] = angular.copy(this.project)
                            project.editMode = true
                        }
                    }

                    // Cancel edit of editMode
                    this.cancel = (project) => {
                        this.project = _previous[project._id]
                        project.editMode = false

                    }

                    // Delete a project
                    this.dele = '';

                },
                delete (project){
                  alert("Sur?")
                    projectsService.delete(project).then((res) => {
                        this.project = {}
                    })
                }
            })
        }]
    })
})(angular.module('app.project'))
