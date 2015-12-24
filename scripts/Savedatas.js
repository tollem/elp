


(function(){
    var vm = this ;
    var valEmailCol ;
    var valImmNum ;
    var valObjNum;
    var valSeqNum;
    var valGroupe;
    var valInAssTech;
    var valInvType;
    var valAdrImm;
    var valPostNumber;
    var valflNumber;
    var valNumRoom;
    var valNameNOcc;
    var valFsNameNOcc;
    var valEmailNOcc;
    var valTelNOcc;
    var valEnDatNOcc;
    var valNamForOcc;
    var valFirNamForOcc;
    var valEmailForOcc;
    var valTelForOcc;
    var valExDatForOcc;
    var valAdrForOcc;
    var valTypeOfRoomPi1;

    function savedatas(){
        valEmailCol = vm.inventory.Email_rr;
        valImmNum = vm.inventory.No_Immeuble;
        valObjNum = vm.inventory.No_objet;
        valSeqNum = vm.inventory.No_Sequence;
        valGroupe = vm.inventory.Groupe;
        valInAssTech = vm.inventory.Init_Ass_Tech;
        valInvType = vm.inventory.inventoryType;
        valAdrImm = vm.inventory.Adresse_Immeuble;
        valPostNumber = vm.inventory.postNumber_Immeuble;
        valflNumber = vm.inventory.floorNumber;
        valNumRoom = vm.inventory.numberofRoom;
        valNameNOcc = vm.inventory.nameNewOccupant;
        valFsNameNOcc = vm.inventory.firstnameNewOccupant;
        valEmailNOcc = vm.inventory.Email_newOccupant;
        valTelNOcc = vm.inventory.telephoneNewOccupant;
        valEnDatNOcc = vm.inventory.entryDateNewOccupant;
        valNamForOcc = vm.inventory.nameFormerOccupant;
        valFirNamForOcc = vm.inventory.firstnameFormerOccupant;
        valEmailForOcc = vm.inventory.Email_formerOccupant;
        valTelForOcc = vm.inventory.telephoneFormerOccupant;
        valExDatForOcc = vm.inventory.exitDateFormerOccupant;
        valAdrForOcc = vm.inventory.adressFormerOccupant
        valTypeOfRoomPi1 = vm.inventory.TypeofRoomPi1;
        alert(valEmailCol+valImmNum+valObjNum);
    }
    return {
        savedatas: savedatas
    }

}());