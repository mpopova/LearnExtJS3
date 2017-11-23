Ext.define('LearnExt.view.ships.ShipWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.windowShip',

    openWindow: function (sender, record) {
        var grid = sender.up('grid'),
            selectedRow = grid.getSelectionModel().getSelection()[0],
            record1 = selectedRow.data,
            windowViewModel;

        this.windowShip = Ext.create('LearnExt.view.ships.ShipWindow');

        windowViewModel = this.windowShip.getViewModel();
        windowViewModel.set('shipName', record1.ship_name);
        windowViewModel.set('shipType', record1.ship_type);
        windowViewModel.set('shipId', record1.ship_id);
        
        this.windowShip.show();
    },

    cancelUpdate: function (sender, record) {
        sender.up('window[name=shipWindow]').close();
    },

    // afterRender: function(grid){
    //     debugger;
    // },

    submitUpdate: function (sender, record) {
        var window,
            shipsStore;

        shipsStore = Ext.getStore('shipsStore');
        window =  sender.up('window[name=shipWindow]');
        // var shipsStoreOtherWay  = Ext.data.StoreManager.lookup('shipsStore');

        dataForUpdate = this.getViewModel().data; //object

        var getGlobalVar =  LearnExt.Variables;
        // console.log(getGlobalVar.windowName);
        // debugger;
        // console.log(sender);
        // console.log(sender.up()); //addBtn

        if(window.action == 'add'){
            QueryDatabase.addShips(dataForUpdate);
        }
        else{
            QueryDatabase.updateShips(dataForUpdate);
        }

        shipsStore.load();
        window.close();
    }

});
