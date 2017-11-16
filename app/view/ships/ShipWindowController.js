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
            shipTypeValue;

        shipNameValue = Ext.getCmp('shipName').getValue();
        shipTypeValue = Ext.getCmp('shipType').getValue();
        this.getViewModel().data;
        console.log(this.getViewModel().data);

console.log(this);
        // this.store.getProxy().getWriter().writeAllFields = pressed;

        // console.log(record);
    }

});
