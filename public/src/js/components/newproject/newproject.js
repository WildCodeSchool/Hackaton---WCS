((app)=>{
  'use strict'
  app.component('newproject', {
    templateUrl:'src/js/components/newproject/newproject.html',
    controller:['projectsService', function(projectsService){

      this.date = new Date();
      this.projects = []
      this.add = () => {

          this.project.PublishedAt = Math.round(this.date.getTime() / 1000)

              projectsService.add(this.project).then((res) => {
                this.projects.push(res.data)
                this.project = {}
              })
      }

      // Cancel
      this.annuler = (project) => {
          this.project = {}
      }

    }]
  })
})(angular.module('app.newproject'))
