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
        this.windowAddShip = Ext.create('LearnExt.view.ships.ShipWindow');
        // debugger;
        var getGlobalVar =  LearnExt.Variables;
        getGlobalVar.windowName = "addShip";

        // getGlobalVar.windowName.setValue('addShip');

        // Ext.get('windowName').setValue('addShip');

        windowViewModel = this.windowAddShip.getViewModel();
        this.windowAddShip.show();
    }

});
