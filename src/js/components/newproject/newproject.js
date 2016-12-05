((app) => {
    'use strict'
    app.component('newproject', {
        templateUrl: 'js/components/newproject/newproject.html',
        controller: ['projectsService', "studentsService", function(projectsService, studentsService) {

            this.date = new Date()

            this.projects = []

            studentsService.get().then((res) => {
                this.students = res.data
            })

            //Add a new Project
            this.add = () => {
                console.log(this.project)
                //check if student selected
                if (this.project.student != undefined){
                    //loop in all students
                    for (let i in this.students){
                        //check if this.project.student match with one of student name
                        if (this.project.student == this.students[i].name){
                            //catch id of this student
                            //this.project.student = this.students[i]._id
                            //push new project with student id
                            return projectsService.add(this.project).then((res) => {
                                this.projects.push(res.data)
                                //get all new projects
                                projectsService.get().then((res)=>{
                                    let allNewProjects = res.data
                                    //loop in all new project
                                    for (let j in allNewProjects){
                                        //catch id of this.project
                                        if (this.project.title == allNewProjects[j].title){
                                          //create newstudent
                                          let newStudent = {}
                                          newStudent['_id'] = this.students[i]._id
                                          newStudent['projects'] = allNewProjects[j]._id
                                          //edit newstudent with its new project
                                          return studentsService.edit(newStudent).then((res)=>{
                                              this.project = {}
                                          })
                                        }
                                    }
                                })
                            })
                        }
                    }
                } else {
                    this.project.student = ""
                    projectsService.add(this.project).then((res) => {
                        this.projects.push(res.data)
                        this.project = {}
                    })
                }
                this.project = {}
            }

            // Cancel
            this.annuler = (project) => {
                this.project = {}
            }

        }]
    })
})(angular.module('app.newproject'))
