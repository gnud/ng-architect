class NavHeaderMenuProjectsController{
    constructor($element, $scope){
        'ngInject';

        var vm = this;
        vm.$scope = $scope;
        vm.$element = $element;
        vm.project = null;
    }

    $onInit(){
        var vm = this;
        console.log(this);
        let select = this.$element.find('select');
        let button = this.$element.find('button');
        select.on('change', function (e, a, b) {
            console.log('on change', vm.$scope);
            console.log('on change', vm.project);
        })
    }
}

export const NavHeaderMenuProjectsComponent = {
    templateUrl: './views/app/components/nav-header-menu-projects/nav-header-menu-projects.component.html',
    controller: NavHeaderMenuProjectsController,
    controllerAs: 'vm',
    bindings: {}
}
