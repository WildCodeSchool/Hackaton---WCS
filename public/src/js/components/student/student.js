((app) => {

    app.component('student', {
        templateUrl: 'src/js/components/student/student.html',
        controller: ['studentsService',
                    '$stateParams',
                    'projectsService', function(studentsService, $stateParams, projectsService) {
            angular.extend(this, {
                $onInit() {
                    studentsService.getPopulate($stateParams).then((res) => {
                        this.student = res.data
                        this.studentProjects = this.student.projects
                    })
                    projectsService.get().then((res) => {
                        this.projects = res.data
                    })

                    this.addProject = (id, [newProject]) => {
                        studentsService.edit(id, newProject).then((res)=>{

                        })
                    }

                }

            })
        }]
    })

})(angular.module('app.student'))
