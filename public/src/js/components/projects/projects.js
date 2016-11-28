((app) => {

    app.component('projects', {
        bindings: {
            blogs: '<'
        },
        templateUrl: 'src/js/components/projects/projects.html',
        controller: ['blogsService', function(blogsService) {
            angular.extend(this, {
                $onInit() {

                    this.begin = 0;
                    this.limit = 3;
                    this.title = "Blog"

                    blogsService.get().then((res) => {
                        this.blogs = res.data
                        console.log(this.blogs)
                    })

                },
                // Pagination
                next() {

                  this.limit ++
                     (this.begin < this.blogs.length -1 ? this.begin ++ : this.begin = 0)
                }

                // prev() {
                //     if (this.begin < this.blogs.length - 1) this.begin--;
                //     else this.begin == this.blogs.length;
                // }
            })
        }]
    })

})(angular.module('app.projects'))
