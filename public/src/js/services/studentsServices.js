((app) => {
    'use strict'

    app.service('studentsService', function($http) {
        return {

            get() {
                return $http.get('/api/students')
            },
            getPopulate(students) {
                return $http.get('/api/students/' + students.studentId)
            },
            add(student) {
                return $http.post('/api/students', student)
            },
            edit(students) {
                return $http.put('/api/students/' + students._id, students)
            },
            delete(students) {
                return $http.delete('/api/students/' + students._id)
            }
        }
    })

})(angular.module('app.services'))
