((app) => {

    app.component('project', {
        bindings: {
            project: '<'
        },
        templateUrl: 'js/components/project/project.html',
        controller: ['projectsService', '$stateParams', '$timeout', 'commentsService', function(projectsService, $stateParams, $timeout, commentsService) {
            angular.extend(this, {
                $onInit() {

                    let _previous = {}


                    this.limit = 1;
                    this.begin = 0;
                    this.editMode

                    commentsService.get().then((res) => {
                        this.comments = res.data
                    })

                    // add new comment
                    this.addComment = (comment, project) => {
                        this.comment.projects = project._id
                        commentsService.add(this.comment).then((res) => {
                            this.test = res.data._id
                            this.comment = ""
                            this.project(this.test, project);
                        })

                    }


                    projectsService.getPopulate($stateParams).then((res) => {
                        this.projects = res.data
                        console.log(this.projects)

                    })

                    // Auto Slider - Pictures's project
                    var timer;
                    var sliderFunc = () => {
                        timer = $timeout(() => {
                            this.nexte();
                            this.suivant();
                            timer = $timeout(sliderFunc, 5000);
                        }, 5000);
                    };

                    sliderFunc();

                    // Auto Slider - usercardproject
                    this.view = 3
                    this.start = 0

                    // Update on Window Learn more
                    this.update = (project, images, index) => {
                        if (this.editMode) {
                            this.comment = project.comments[index]
                            commentsService.edit(this.comment).then((res) => {
                              console.log(res.data)
                            })
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
                },
                suivant() {
                    this.start < this.projects.student.length - 3 ? this.start++ : this.start = 0;
                },
                project(id, projects) {
                    projects.comments.push(id)
                    projectsService.edit(projects).then((res) => {

                    })
                }
            })
        }]
    })
})(angular.module('app.project'))
