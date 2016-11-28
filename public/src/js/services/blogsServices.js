((app) => {
    'use strict'

    app.service('blogsService', function($http) {
        return {

            get() {
                return $http.get('/api/blogs')
            },
            getPopulate(data){
              return $http.get('/api/blogs/'+ data._id )
            },
            add(blog) {
                return $http.post('/api/blogs', blog)
            },
            edit(blog) {
                return $http.put('/api/blogs/' + blog._id, blog)
            },
            delete(blog) {
                return $http.delete('/api/blogs/' + blog._id)
            }
        }
    })

})(angular.module('app.services'))
