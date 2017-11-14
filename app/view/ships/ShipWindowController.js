Ext.define('Latest.view.ships.ShipWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowShip',

    openWindow: function (sender, record) {
        var grid = sender.up('grid');
        var selectedRow = grid.getSelectionModel().getSelection()[0];
        var record1 = selectedRow.data;

        var viewModel = Ext.create('LearnExt.view.ships.TestViewModel',{
            config: {
                data:{
                    shipName: record1.ship_name
                }
            },
            data:{
                shipName: record1.ship_name
            }
        });

        this.windowShip = Ext.create('Latest.view.ships.ShipWindow');

        console.log(viewModel);

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
