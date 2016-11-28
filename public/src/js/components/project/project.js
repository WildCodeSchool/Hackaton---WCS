((app) => {

    app.component('project', {
         bindings: {
            blog: '<'
         },
        templateUrl: 'src/js/components/project/project.html',
        controller: ['projectsService', '$stateParams', function(projectsService, $stateParams) {
            angular.extend(this, {
                $onInit() {

                  let _previous = {}

                  this.date = new Date();

                    projectsService.get().then((res) => {
                        this.blog = res.data

                        // Extraction de l'id passé en paramètre
                        let id = $stateParams.blogId
                        this.blog.forEach((element) => {

                            if (element._id === id) {
                                this.blog = element

                            }
                        })
                    })


                    // Update on Window Learn more
                    this.update = (blog) => {
                        if (blog.editMode) {
                            blog.PublishedAt =  Math.round(this.date.getTime() / 1000)

                            projectsService.edit(blog).then((res) => {
                                this.blog = res.config.data
                                blog.editMode = false
                            })

                        } else {
                            _previous[blog._id] = angular.copy(this.blog)
                            blog.editMode = true
                        }
                    }

                    // Cancel edit of editMode
                    this.cancel = (blog) => {
                        this.blog = _previous[blog._id]
                        blog.editMode = false

                    }

                    // Delete an project
                    this.dele = '';

                },
                delete (blog){
                  alert("Sur?")
                    projectsService.delete(blog).then((res) => {
                        this.blog = {}
                    })
                }
            })
        }]
    })
})(angular.module('app.project'))
