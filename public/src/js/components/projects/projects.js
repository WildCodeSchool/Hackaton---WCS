((app) => {

    app.component('projects', {
        bindings: {
            blogs: '<'
        },
        templateUrl: 'src/js/components/projects/projects.html',
        controller: ['projectsService', 'studentsService', function(projectsService, studentsService) {
            angular.extend(this, {
                $onInit() {

                    projectsService.get().then((res) => {
                        this.projects = res.data
                    })

                    this.limit = 4

                    this.likes = (project) => {
                        project.likes++
                        projectsService.edit(project).then((res) => {

                        })
                    }

                    this.loadmore = () => {
                        this.limit += 2
                    }

                    studentsService.get().then((res) => {
                        this.students = res.data
                    })

                    this.showComment = false

                    this.viewComment = () => {
                      if (this.showComment == true){
                        this.showComment = false
                      } else {
                        this.showComment = true
                      }

                    }

                    this.addComment = (project,comment)=>{
                      project.comments.push(comment)
                      projectsService.edit(project).then((res)=>{
                        debugger

                      })
                    }

                }
            })
        }]
    })

})(angular.module('app.projects'))
