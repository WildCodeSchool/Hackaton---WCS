((app) => {
    'use strict'
    app.component('navbar', {
        templateUrl: "/src/js/components/navbar/navbar.html",
        controller: ["projectsService",function(projectsService) {
            angular.extend(this, {
                $onInit() {

                  //Search if project exist
                  this.show = () => {
                      projectsService.getOne(this.search).then((res) => {
                          this.results = res.data
                          console.log(this.results)
                      })
                  }


                }
            })
        }]
    })

})(angular.module('app.navbar'))
