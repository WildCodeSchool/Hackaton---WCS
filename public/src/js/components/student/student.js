((app) => {

    app.component('student', {
        bindings: {
            authors: '<'
        },
        templateUrl: 'src/js/components/student/student.html',
        controller: ['studentsService', '$stateParams', function(studentsService, $stateParams) {
            angular.extend(this, {
                $onInit() {


                    studentsService.getPopulate($stateParams).then((res) => {
                        this.author = res.data
                        console.log(this.author)
                    })

                }

            })
        }]
    })

})(angular.module('app.student'))
