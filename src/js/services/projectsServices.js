((app) => {
    'use strict'

    app.service('projectsService', function($http) {
        return {

            get() {
                return $http.get('/api/projects')
            },
            getOne(title) {
                return $http.get('/api/search/' + title)
            },
            getPopulate(project) {
                return $http.get('/api/projects/' + project.projectId)
            },
            add(project) {
                return $http.post('/api/projects', project)
            },
            upload(image) {
                return new Promise((resolve, reject) => {
                    let url = '/api/upload'
                    let xhr = new XMLHttpRequest()
                    let fd = new FormData()
                    xhr.open("POST", url, true);
                    //  xhr.setRequestHeader("Authorization", this.$cookies.get('token'));
                    xhr.onreadystatechange = function(e) {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                resolve()
                            } else {
                                reject()
                            }
                        }
                    };
                    fd.append('image', image)
                    xhr.send(fd)
                })
            },
            edit(project) {
                return $http.put('/api/projects/' + project._id, project)
            },
            delete(project) {
              debugger
                return $http.delete('/api/projects/' + project._id)
            }
        }
    })

})(angular.module('app.services'))
