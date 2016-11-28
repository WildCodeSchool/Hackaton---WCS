((app)=>{
  'use strict'
  app.component('newproject', {
    templateUrl:'src/js/components/newproject/newproject.html',
    controller:['projectsService', function(projectsService){

      this.date = new Date();
      this.blogs = []
      this.add = () => {

          this.blog.PublishedAt = Math.round(this.date.getTime() / 1000)

              projectsService.add(this.blog).then((res) => {
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
})(angular.module('app.newproject'))
