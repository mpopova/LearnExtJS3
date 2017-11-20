Ext.define('LearnExt.view.ships.ShipWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowShip',

    openWindow: function (sender, record) {
        // console.log(sender.up());
        var grid = sender.up('grid'),
            selectedRow = grid.getSelectionModel().getSelection()[0],
            record1 = selectedRow.data,
            windowViewModel;

        this.windowShip = Ext.create('LearnExt.view.ships.ShipWindow');

        windowViewModel = this.windowShip.getViewModel();
        windowViewModel.set('shipName', record1.ship_name);
        windowViewModel.set('shipType', record1.ship_type);
        
        this.windowShip.show();
    },

    cancelUpdate: function (sender, record) {
        sender.up('window[name=shipWindow]').close();
    },

    submitUpdate: function (sender, record) {

       // var active = this.activeRecord,
   // console.log(record);

        var shipNameValue,
            shipTypeValue,
            shipsStore = Ext.getStore('shipsStore');
            // console.log(shipsStore);

// Ext.JSON.decode(): You're trying to decode an invalid JSON String: object(stdClass)#2 (0)

            console.log(Ext.data.StoreManager.lookup('shipsStore').data);


            console.log(this.getViewModel().data);



            dataForUpdate = this.getViewModel().data; //object

            QueryDatabase.updateShips(this.getViewModel().data);
    }

});
