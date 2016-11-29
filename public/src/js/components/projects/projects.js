((app) => {

    app.component('projects', {
        bindings: {
            blogs: '<'
        },
        templateUrl: 'src/js/components/projects/projects.html',
        controller: ['projectsService', function(projectsService) {
            angular.extend(this, {
                $onInit() {
                  
                    projectsService.get().then((res) => {
                        this.projects = res.data
                        console.log(this.project)
                    })

                }
            })
        }]
    })

})(angular.module('app.projects'))
