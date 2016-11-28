((app) => {
    'use strict'

    app.service('studentsService', function($http) {
        return {

            get() {
                return $http.get('/api/students')
            },
            getPopulate(students) {
                return $http.get('/api/students/' + students.authorId)
            },
            add(student) {
                return $http.post('/api/students', student)
            },
            edit(student) {
                return $http.put('/api/students/' + students._id, student)
            },
            delete(student) {
                return $http.delete('/api/students/' + students._id)
            }
        }
    })

})(angular.module('app.services'))
