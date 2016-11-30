((app) => {
    'use strict'
    app.component('newproject', {
        templateUrl: 'js/components/newproject/newproject.html',
        controller: ['projectsService', "studentsService", function(projectsService, studentsService) {
            // let student = _.find(this.students, (student) => {
            //     return(student.name === this.project.student)
            // })
            //if (student)
            //this.project.student = student._id
            this.date = new Date();
            this.projects = []

            studentsService.get().then((res) => {
                    this.students = res.data
                })
                //Add a new Project
            this.add = () => {
                console.log(this.project)
                projectsService.add(this.project).then((res) => {
                    this.projects.push(res.data)
                    this.project = {}
                })

            }


            // Cancel
            this.annuler = (project) => {
                this.project = {}
            }

        }]
    })
})(angular.module('app.newproject'))
