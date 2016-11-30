((app) => {

    app.component('projects', {
        bindings: {
            blogs: '<'
        },
        templateUrl: 'js/components/projects/projects.html',
        controller: ['projectsService', 'studentsService', function(projectsService, studentsService) {
            angular.extend(this, {
                $onInit() {

                    projectsService.get().then((res) => {
                        this.projects = res.data
                    })

                    //pagination loadmore
                    this.limit = 4

                    this.loadmore = () => {
                        this.limit += 2
                    }

                    //Add likes
                    this.likes = (project) => {
                        project.likes++
                            projectsService.edit(project).then((res) => {

                            })
                    }


                    // Get all students
                    studentsService.get().then((res) => {
                        this.students = res.data
                    })

                    //show all comment
                    this.showComment = false

                    this.viewComment = (project) => {
                        if (this.showComment == true) {
                            this.showComment = false
                        } else {
                            this.newones = project
                            this.showComment = true
                        }
                    }

                    // add new comment
                    this.addComment = (project, comment) => {
                        project.comments.push(comment)
                        projectsService.edit(project).then((res) => {
                            this.comment = ""
                        })
                    }

                    // limit comment
                    this.limitComment = 2

                    this.loadMoreComment = () => {
                        this.limitComment += 2
                    }

                }
            })
        }]
    })

})(angular.module('app.projects'))
