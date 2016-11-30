((app) => {
    'use strict'
    app.component('navbar', {
        templateUrl: "/src/js/components/navbar/navbar.html",
        controller: ["projectsService", function(projectsService, FacebookService) {
            angular.extend(this, {
                $onInit() {

                    //Search if project exist
                    this.show = () => {
                        if (this.search.length > 0) {
                            projectsService.getOne(this.search).then((res) => {
                                this.results = res.data
                            })
                        }
                    }
                }
            })
        }]
    })

})(angular.module('app.navbar'))
