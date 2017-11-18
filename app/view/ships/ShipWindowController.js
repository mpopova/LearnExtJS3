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

        // var win = button.up('window');
        // var form = win.down('form');        
        // var record = form.getRecord();
        // record.set(form.getValues());

        // this.getUsrDataStoreStore().update(record);


        // console.log(this.getViewModel().data);

        //   this.getViewModel().set('shipName', this.getViewModel().data.shipName);
        //   console.log(this.getViewModel());

        // console.log(record);


        var user = Ext.create('LearnExt.store.Ship', {
            shipName: shipNameValue,
            shipType: shipTypeValue
        });

        // var updatedValues = this.getViewModel().set({
        //      shipName: shipNameValue,
        //      shipType: shipTypeValue
        //  });

         console.log(user);

        user.save();



        user.load(1, {
             success: function(user) {
                  console.log(user.getId()); //logs 123
             }
         });

         // console.log(this.getViewModel());

// console.log(this);
        // this.store.getProxy().getWriter().writeAllFields = pressed;

        // console.log(record);
    }

});
