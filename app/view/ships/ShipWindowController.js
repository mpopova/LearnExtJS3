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
        var shipNameValue,
            shipTypeValue,
            shipsStore = Ext.data.StoreManager.lookup('shipsStore');


        shipsStore.update({records: this.getViewModel().data});
    }

});
