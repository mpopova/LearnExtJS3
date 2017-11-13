Ext.define('Latest.view.ships.ShipWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowShip',

    openWindow: function (sender, record) {

        // this.windowShip.rec=record;
        // console.log(record);
        // console.log(sender);

        // var row = userGrid.getSelectionModel().getSelection()[0];
        // console.log(row.get('dni'))

        var grid = sender.up('grid');
        console.log(grid);
        var selectedRow = grid.getSelectionModel().getSelection()[0];
        // console.log(selectedRow.data);
        record = selectedRow.data;
        // console.log(record.ship_name);
        // console.log(record);
        // this.windowShip.record = record;
        console.log(record);
        this.windowShip='';
        this.windowShip.record = record;
        this.windowShip = Ext.create('Latest.view.ships.ShipWindow');
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
