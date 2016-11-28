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
                  this.editMode

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
                        if (this.editMode) {
                            this.projects.PublishedAt =  Math.round(this.date.getTime() / 1000)

                            projectsService.edit(project).then((res) => {
                              debugger
                                this.projects = res.config.data
                                this.editMode = false
                            })

                        } else {
                            _previous[this.projects._id] = angular.copy(this.projects)
                            this.editMode = true
                        }
                    }

                    // Cancel edit of editMode
                    this.cancel = (project) => {
                        this.projects = _previous[this.projects._id]
                        this.editMode = false

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
