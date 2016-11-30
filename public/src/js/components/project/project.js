((app) => {

    app.component('project', {
        bindings: {
            project: '<'
        },
        templateUrl: 'src/js/components/project/project.html',
        controller: ['projectsService', '$stateParams', '$timeout', '$animate', function(projectsService, $stateParams, $timeout, $animate) {
            angular.extend(this, {
                $onInit() {

                    let _previous = {}

                    this.limit = 1;
                    this.begin = 0;
                    this.editMode

                    projectsService.get().then((res) => {
                        this.projects = res.data

                        // Extraction de l'id passé en paramètre
                        let id = $stateParams.projectId
                        this.projects.forEach((element) => {
                            if (element._id === id) {
                                this.projects = element
                                    //console.log(this.projects)
                            }
                        })
                    })


                    var timer;
                    var sliderFunc = () => {
                        timer = $timeout(() => {
                            this.nexte();
                            timer = $timeout(sliderFunc, 3000);
                        }, 3000);
                    };

                    sliderFunc();

                    // Update on Window Learn more
                    this.update = (project, images) => {
                        if (this.editMode) {
                            images = images.split(';')
                            project.image = images
                            projectsService.edit(project).then((res) => {
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

                    // add new comment
                    this.addComment = (project, comment) => {
                        project.comments.push(comment)
                        projectsService.edit(project).then((res) => {
                            this.comment = ""
                        })
                    }

                },
                delete(project) {
                    alert("Sur?")
                    projectsService.delete(project).then((res) => {
                        this.project = {}
                    })
                },
                nexte() {
                    this.begin < this.projects.image.length - 1 ? this.begin++ : this.begin = 0;

                },
                prev() {
                    this.begin > 0 ? this.begin-- : this.begin = this.projects.image.length - 1;
                }
            })
        }]
    })
})(angular.module('app.project'))
