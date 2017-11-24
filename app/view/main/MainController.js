Ext.define('LearnExt.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    addRecord: function(sender, record){
        this.windowAddShip = Ext.create('LearnExt.view.ships.ShipWindow', {action: 'add'});
        // debugger;
        // var getGlobalVar =  LearnExt.Variables;
        // getGlobalVar.windowName = "addShip";

        // windowViewModel = this.windowAddShip.getViewModel();
        this.windowAddShip.show();
    },

    deleteRecord: function(sender, record){
        debugger
        var grid,
            selection,
            selectedRow,
            rowToDelete;

        grid = Ext.getCmp('shipGrid');
        selection= grid.getSelectionModel();
        selectedRow = grid.getSelectionModel().getSelection()[0];
        rowToDelete = selectedRow.data;

        QueryDatabase.deleteShips(rowToDelete);

    }

});
