((app) => {

    const file = [() => {
        return {
            restrict: 'E',
            template: '<input type="file" />',
            replace: true,
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                var listener = function() {
                    scope.$apply(function() {
                        attr.multiple ? ctrl.$setViewValue(element[0].files) : ctrl.$setViewValue(element[0].files[0])
                    });
                }
                element.bind('change', listener)
            }
        }
    }]

    app.directive('file', file)

})(angular.module('app', [
    'ui.router',
    'ngCookies',
    'ngAnimate',
    'app.config',
    'app.views',
    'app.services',
    'app.project',
    'app.projects',
    'app.newproject',
    'app.student',
    'app.newstudent',
    'app.navbar',
    'app.edit',
    'app.login',
    'ngAnimate'
]))
