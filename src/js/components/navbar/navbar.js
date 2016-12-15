((app) => {
    'use strict'
    app.component('navbar', {
        templateUrl: "js/components/navbar/navbar.html",
        controller: ["projectsService", "$timeout", 'AdminsService', '$state', function(projectsService, $timeout, AdminsService, $state) {
            angular.extend(this, {
                $onInit() {

                    //Search if project exist
                    this.show = () => {
                        this.showcross = true
                        if (this.search.length > 0) {
                            projectsService.getOne(this.search).then((res) => {
                                this.results = res.data
                            })
                        }
                    }

                    this.isCollapsed = () => {
                        if (this.showCollapsed == true) {
                            this.showCollapsed = false
                        } else {
                            this.showCollapsed = true
                        }
                    }

                    AdminsService.getCurrent().then((user) => {
                        this.currentUser = user

                    })
                },
                disconnect(){
                    AdminsService.disconnect().then((res) => {
                        $state.go('app.projects')
                        $state.reload()
                    })
                }
            })
        }]
    })
})(angular.module('app.navbar'))
