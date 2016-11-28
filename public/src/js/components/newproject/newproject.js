((app)=>{
  'use strict'
  app.component('newarticle', {
    templateUrl:'src/js/components/newarticle/newarticle.html',
    controller:['blogsService', function(blogsService){

      this.date = new Date();
      this.blogs = []
      this.add = () => {

          this.blog.PublishedAt = Math.round(this.date.getTime() / 1000)

              blogsService.add(this.blog).then((res) => {
                this.blogs.push(res.data)
                this.blog = {}
              })
      }

      // Cancel of +Add article
      this.annuler = (blog) => {
          this.blog = {}
      }

    }]
  })
})(angular.module('app.newarticle'))
