((app) => {

    app.component('student', {
        templateUrl: 'src/js/components/student/student.html',
        controller: ['studentsService', '$stateParams', function(studentsService, $stateParams) {
            angular.extend(this, {
                $onInit() {
                    studentsService.getPopulate($stateParams).then((res) => {
                        this.student = res.data
                        this.projects = this.student.projects
                    })

                }

            })
        }]
    })

})(angular.module('app.student'))
