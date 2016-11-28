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
                            this.studentProjects = this.student.projects
                        })


                        //edit Mode
                        let previous = {}

                        this.editMode = false

                        this.edit = (student) => {
                            if (this.editMode == true) {
                                student.avatar = student.avatar.base64
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


                        /// Get all projects for select
                        projectsService.get().then((res) => {
                            this.projects = res.data
                        })

                        /// init new project
                        this.newProject = {
                            projects: []
                        }

                        //push new project to all projects
                        this.addProject = (id, newProject) => {
                            //get all students
                            studentsService.getPopulate($stateParams).then((res) => {
                                let student = res.data
                                    //get all projects
                                projectsService.get().then((res) => {
                                    let projects = res.data
                                        //je boucle sur chaque projet pour récupérer l'id correspondant au ngModel
                                    for (let i in projects) {
                                        if (newProject == projects[i].title) {
                                            let myNewProject = [student.projects[0]._id, projects[i]._id]
                                            let result = {}
                                            result.projects = myNewProject
                                            console.log(result)
                                            return studentsService.edit(result).then((res) => {

                                            })
                                        }
                                    }
                                })
                            })
                        }
                    }
                })
            }
        ]
    })
})(angular.module('app.student'))
