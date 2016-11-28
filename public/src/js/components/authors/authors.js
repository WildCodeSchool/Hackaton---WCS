((app) => {

    app.component('authors', {
        bindings: {
            authors: '<'
        },
        templateUrl: 'src/js/components/authors/authors.html',
        controller: ['authorsService', '$stateParams', function(authorsService, $stateParams) {
            angular.extend(this, {
                $onInit() {
                  

                    authorsService.getPopulate($stateParams).then((res) => {
                        this.author = res.data
                        console.log(this.author)
                    })

                }

            })
        }]
    })

})(angular.module('app.authors'))
