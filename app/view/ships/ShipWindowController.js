Ext.define('Latest.view.ships.ShipWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowShip',

    openWindow: function (sender, record) {
        this.windowShip = Ext.create('Latest.view.ships.ShipWindow');
        this.windowShip.rec=record;
        this.windowShip.show();
    },

    submitUpdate: function (sender, record) {
        sender.up('window[name=shipWindow]').close();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
