((app) => {
    'use strict'
    app.component('navbar', {
        templateUrl: "js/components/navbar/navbar.html",
        controller: ["projectsService", "$timeout", function(projectsService, $timeout) {
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
                }
            })
        }]
    })
})(angular.module('app.navbar'))
