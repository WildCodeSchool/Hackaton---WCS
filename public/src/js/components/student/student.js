((app) => {

    app.component('student', {
        templateUrl: 'src/js/components/student/student.html',
        controller: ['studentsService',
            '$stateParams',
            'projectsService',
            function(studentsService, $stateParams, projectsService) {
                angular.extend(this, {
                    $onInit() {

                        /// Get student
                        studentsService.getPopulate($stateParams).then((res) => {
                            this.student = res.data
                            console.log(this.student)
                            this.studentProjects = this.student.projects
                        })

                        //
                        //Edit Mode
                        //
                        let previous = {}

                        this.editMode = false

                        this.edit = (student) => {
                                if (this.editMode == true) {
                                    //student.avatar = student.avatar.base64
                                    studentsService.edit(student).then((res) => {
                                        this.editMode = false
                                    })
                                } else {
                                    previous[student] = angular.copy(student)
                                    this.editMode = true
                                }
                            }
                            // cancel
                        this.cancel = (student) => {
                            this.student = previous[student]
                            this.editMode = false
                        }

                        // delete
                        this.delete = (student) => {
                            console.log(student._id);
                            studentsService.delete(student).then((res) => {

                            })
                        }

                        //
                        /// Get all projects for select
                        //
                        projectsService.get().then((res) => {
                            this.projects = res.data
                        })


                        /// init new project
                        this.newProject = {
                            projects: []
                        }

                        //push new project to all projects by student
                        this.addProject = (id, newProject) => {
                            for (let i in this.projects) {
                                if (newProject == this.projects[i].title) {
                                    this.student.projects.push(this.projects[i])
                                    return studentsService.edit(this.student).then((res) => {
                                      debugger
                                        this.projects[i].student.push(this.student._id)
                                        projectsService.edit(this.projects[i]).then((res) => {
                                          debugger
                                        })
                                    })
                                }
                            }
                        }
                    }
                })
            }
        ]
    })
})(angular.module('app.student'))
