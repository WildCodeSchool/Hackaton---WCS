((app) => {
    'use strict'

    app.service('authorsService', function($http) {
        return {

            get() {
                return $http.get('/api/authors')
            },
            getPopulate(authors) {
                return $http.get('/api/authors/' + authors.authorId)
            },
            add(author) {
                return $http.post('/api/authors', author)
            },
            edit(author) {
                return $http.put('/api/authors/' + authors._id, author)
            },
            delete(author) {
                return $http.delete('/api/authors/' + authors._id)
            }
        }
    })

})(angular.module('app.services'))
