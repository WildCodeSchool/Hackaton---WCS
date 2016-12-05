((app) => {
    'use strict'
    app.component('newstudent', {
        templateUrl: 'js/components/newstudent/newstudent.html',
        controller: ['studentsService', 'projectsService', function(studentsService, projectsService) {
            angular.extend(this, {
                $onInit() {

                    projectsService.get().then((res) => {
                        this.projects = res.data
                    })

                    this.add = (newStudent, newProject) => {
                      // check if project selected
                        if (newProject[0] != undefined) {
                            //loop in all projects
                            for (let i in this.projects) {
                                //match newProject with a project title in all projects
                                if (newProject == this.projects[i].title) {
                                    newStudent.projects = [this.projects[i]._id]
                                        //create new student
                                    return studentsService.add(this.newStudent).then((res) => {
                                        //create var allStudents + the new one
                                        studentsService.get().then((res) => {
                                            let allStudents = res.data
                                                //loop in all students
                                            for (let j in allStudents) {
                                                //match names
                                                if (newStudent.name == allStudents[j].name) {
                                                    //create var project to edit this.projects
                                                    let project = {}
                                                    project['_id'] = this.projects[i]._id
                                                    project['student'] = allStudents[j]._id
                                                        //edit selected project
                                                    return projectsService.edit(project).then((res) => {

                                                    })
                                                }
                                            }
                                        })
                                    })
                                } else {
                                    studentsService.add(this.newStudent).then((res) => {

                                    })
                                }
                            }
                        } else {
                            studentsService.add(this.newStudent).then((res) => {

                            })
                        }
                        this.newStudent = {}
                    }

                    this.addProject = () => {

                    }

                    this.cancel = () => {
                        this.newStudent = {}
                    }

                }
            })
        }]
    })
})(angular.module('app.newstudent'))
