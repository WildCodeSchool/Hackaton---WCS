((app) => {

    app.component('projects', {
        bindings: {
            blogs: '<'
        },
        templateUrl: 'js/components/projects/projects.html',
        controller: ['projectsService', 'studentsService','commentsService', function(projectsService,studentsService ,commentsService) {
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
                    this.addComment = (comment, project) => {
                        this.comment.projects = project._id
                        commentsService.add(this.comment).then((res) => {
                            this.test = res.data._id
                            this.comment = ""
                            // call project() and pass parameters
                            this.project(this.test, project);
                        })

                    }

                    // limit comment
                    this.limitComment = 2

                    this.loadMoreComment = () => {
                        this.limitComment += 2
                    }

                },
                project(id, projects) {
                  projects.comments.push(id)
                  projectsService.edit(projects).then((res)=>{

                  })
                }
            })
        }]
    })

})(angular.module('app.projects'))
