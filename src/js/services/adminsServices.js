((app)=> {
'use strict'
    app.service('AdminsService', ['$http', '$cookies', function($http, $cookies) {
        return {

            connect(data) {
                return $http.post('/api/admin', data).then((res) => {
                    this.currentUser = res.data.user
                    $cookies.put('token', res.data.token)
                })
            },
            disconnect() {
                return new Promise((resolve, reject) => {
                    $cookies.remove("token")
                    this.currentUser = null
                    resolve()
                })
            }
        }
    }])
})(angular.module('app.services'))
