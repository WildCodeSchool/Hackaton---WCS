((app) => {
    'use strict'

    app.service('commentsService', function($http) {
        return {

            get() {
                return $http.get('/api/comments')
            },
            add(comment) {
                return $http.post('/api/comments', comment)
            },
            edit(comments) {
                return http.put('api/comments/' + comments._id, comments)
            },
            delete(comments) {
                return $http.delete('api/comments/' + comments._id)
            }
        }
    })
})(angular.module('app.services'))
