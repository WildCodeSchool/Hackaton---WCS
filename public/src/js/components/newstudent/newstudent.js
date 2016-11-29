((app) => {
    'use strict'
    app.component('newstudent', {
        templateUrl: '/src/js/components/newstudent/newstudent.html',
        controller: ['studentsService', 'projectsService', function(studentsService, projectsService) {
            angular.extend(this, {
                $onInit() {

                    projectsService.get().then((res) => {
                        this.projects = res.data
                    })

                    this.add = (newStudent, newProject) => {
                        //encode avatar in base64
                        newStudent.avatar = newStudent.avatar.base64
                        if (newProject[0] = undefined) {
                            for (let i in this.projects) {
                                if (newProject == this.projects[i].title) {
                                    newStudent.projects = [this.projects[i]._id]
                                        //create new student
                                    return studentsService.add(this.newStudent).then((res) => {
                                        //create allStudents + the new one
                                        studentsService.get().then((res) => {
                                            let allStudents = res.data
                                                //je boucle dans tout les student
                                            for (let j in allStudents) {
                                                //je match le nom
                                                if (newStudent.name == allStudents[j].name) {
                                                    //creer une variable project pour editer le this.projects
                                                    let project = {}
                                                    project['_id'] = this.projects[i]._id
                                                    project['student'] = allStudents[j]._id
                                                        //J'edite le project dans le select
                                                    return projectsService.edit(project).then((res) => {
                                                        console.log('project');
                                                    })
                                                }
                                            }
                                        })
                                    })
                                }
                                else {
                                    studentsService.add(this.newStudent).then((res) => {
                                        console.log('no-project');
                                    })
                                }
                            }
                        } else {
                            studentsService.add(this.newStudent).then((res) => {
                                console.log('no-project');
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
