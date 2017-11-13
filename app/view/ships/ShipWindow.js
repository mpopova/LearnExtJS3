Ext.define('Latest.view.ships.ShipWindow', {
    extend:'Ext.window.Window',
    controller: 'windowShip',
    title: 'Update Record',
    width: 400,
    floating: true,
    centered: true,
    modal: true,
    name: 'shipWindow',

    viewModel: {
        data: {}
    },
    bind:{
        data: {
           record: '{record}'
        }
    },

    items: [{
        xtype: 'textfield',
        name: 'ship_name',
        fieldLabel: 'Name of ship',
        bind: 'asdasdsadad'
        // bind: '{rec.ship_name}'
    }, {
        xtype: 'textfield',
        name: 'ship_name',
        fieldLabel: 'ship_name',
        // bind: ship_name
        bind: '{record.ship_name}'
        // bind: '{record.ship_name}'

    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            // handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }]
});