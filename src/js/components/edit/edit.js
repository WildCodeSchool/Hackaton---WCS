((app) => {
  'use strict'
    app.component('edit', {
        templateUrl: 'js/components/edit/edit.html',
        controller:['AdminsService', '$state', function(AdminsService, $state) {
            angular.extend(this, {
              $onInit(){
                AdminsService.getCurrent().then((user) => {
                  if (!user)
                    $state.go('app.projects')
                }).catch((err)=>{
                  $state.go('app.projects')
                })
              }
            })
        }]
    })

})(angular.module('app.edit'))
