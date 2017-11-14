Ext.define('Latest.view.ships.ShipWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowShip',

    openWindow: function (sender, record) {
        var grid = sender.up('grid'),
            selectedRow = grid.getSelectionModel().getSelection()[0],
            record1 = selectedRow.data,
            windowViewModel;

        console.log(this.getViewModel());

        this.windowShip = Ext.create('Latest.view.ships.ShipWindow');

        windowViewModel = this.windowShip.getViewModel();
        windowViewModel.set('shipName', record1.ship_name);
        
        this.windowShip.show();
    },

    cancelUpdate: function (sender, record) {
        sender.up('window[name=shipWindow]').close();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
