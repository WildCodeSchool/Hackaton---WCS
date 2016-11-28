((app) => {

    app.component('student', {
        bindings: {
            authors: '<'
        },
        templateUrl: 'src/js/components/student/student.html',
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

})(angular.module('app.student'))
