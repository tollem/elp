// scripts/inventoryType.js
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('inventoryType', inventoryType);

    function inventoryType() {
        function getinventoryTypes() {
            return [
                {
                    "name": "ELE",
                    "value":"ELE"
                },
                {
                    "name":"ELS",
                    "value":"ELS"
                },
                {
                    "name":"ELE-ELS",
                    "value":"ELE-ELS"
                },
             ];
        }

        return {
            getinventoryTypes: getinventoryTypes
        }
    }

})();