((app) => {
    'use strict'
    app.component('newstudent', {
        templateUrl: '/src/js/components/newstudent/newstudent.html',
        controller: ['studentsService', function(studentsService) {
            angular.extend(this, {
                $onInit() {

                    this.add = () => {
                        this.newStudent.avatar = this.newStudent.avatar.base64
                        studentsService.add(this.newStudent).then((res) => {
                            console.log(this.newStudent);
                        })
                    }
                    this.cancel = () => {
                        this.newStudent = {}
                    }

                }
            })
        }]
    })
})(angular.module('app.newstudent'))
