(function () {
    'use strict';

    angular
        .module('yaldayMonoApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
