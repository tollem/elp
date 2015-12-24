// scripts/roomTypes.js
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('roomTypes', roomTypes);

    function roomTypes() {
        function getRoomTypes() {
            return [
                {
                    "name":"Chambre",
                    "state":"Type_Chambre"
                },
                {
                    "name":"WC",
                    "state":"Type_WC"
                },
                {
                    "name":"Salon ou Piece principale",
                    "state":"Type_Principale"
                },
                {
                    "name":"Salle a manger",
                    "state":"Type_Manger"
                },
                {
                    "name":"Hall",
                    "state":"Type_hall"
                },
                {
                    "name":"Cuisine",
                    "state":"Type_Cuisine"
                },
                {
                    "name":"Salle de bain",
                    "state":"Type_Bain"
                },


            ];
        }
        return {
            getRoomTypes: getRoomTypes
        }
    }
})();
