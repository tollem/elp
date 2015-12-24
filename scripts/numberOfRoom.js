// scripts/floorNumber.js
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('numberOfRoom', numberOfRoom);

    function numberOfRoom() {
        function getnumberOfRoom() {
            return [
                {
                    "name": "1",
                    "value":"room_1"
                },
                {
                    "name": "1.5",
                    "value":"room_1.5"
                },
                {
                    "name": "2",
                    "value":"room_2"
                },
                {
                    "name": "2.5",
                    "value":"room_2.5"
                },
                {
                    "name": "3",
                    "value":"room_3"
                },
                {
                    "name": "3.5",
                    "value":"room_3.5"
                },
                {
                    "name": "4",
                    "value":"room_4"
                },
                {
                    "name": "4.5",
                    "value":"room_4.5"
                },
                {
                    "name": "5",
                    "value":"room_5"
                },
                {
                    "name": "5.5",
                    "value":"room_5.5"
                },
                {
                    "name": "6",
                    "value":"room_6"
                },
                {
                    "name": "6.5",
                    "value":"room_6.5"
                },
                {
                    "name": "7",
                    "value":"room_7"
                },
                {
                    "name": "7.5",
                    "value":"room_7.5"
                },
                {
                    "name": "8",
                    "value":"room_8"
                },
                {
                    "name": "8.5",
                    "value":"room_8.5"
                },
                {
                    "name": "9",
                    "value":"room_9"
                },
                {
                    "name": "9.5",
                    "value":"room_9.5"
                },
                {
                    "name": "10",
                    "value":"room_10"
                },
                {
                    "name": "10.5",
                    "value":"room_10.5"
                },
                {
                    "name": "11",
                    "value":"room_11"
                },
                {
                    "name": "11.5",
                    "value":"room_11.5"
                },
                {
                    "name": "12",
                    "value":"room_12"
                },
                {
                    "name": "12.5",
                    "value":"room_12.5"
                },
                {
                    "name": "13",
                    "value":"room_13"
                },
                {
                    "name": "13.5",
                    "value":"room_13.5"
                },
                {
                    "name": "14",
                    "value":"room_14"
                },
                {
                    "name": "14.5",
                    "value":"room_14.5"
                },
                {
                    "name": "15",
                    "value":"room_15"
                },
                {
                    "name": "15.5",
                    "value":"room_15.5"
                },
                {
                    "name": "16",
                    "value":"room_16"
                },
                {
                    "name": "16.5",
                    "value":"room_16.5"
                },
                {
                    "name": "17",
                    "value":"room_17"
                },
                {
                    "name": "17.5",
                    "value":"room_17.5"
                },
                {
                    "name": "18",
                    "value":"room_18"
                },                {
                    "name": "18.5",
                    "value":"room_18.5"
                },
                {
                    "name": "19",
                    "value":"room_19"
                },                {
                    "name": "19.5",
                    "value":"room_19.5"
                },
                {
                    "name": "20",
                    "value":"room_20"
                },                {
                    "name": "20.5",
                    "value":"room_20.5"
                },

             ];
        }
        return {
            getnumberOfRoom: getnumberOfRoom
        }
    }
})();