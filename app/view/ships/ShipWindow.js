Ext.define('Latest.view.ships.ShipWindow', {
    extend:'Ext.window.Window',
    controller: 'windowShip',
    // id:'updateShip',
    title: 'Update Record',
    width: 400,
    floating: true,
    centered: true,
    modal: true,
    name: 'shipWindow',

    viewModel: {
        type: 'windowShipInfo'
    },

    items: [{
        xtype: 'textfield',
        id: 'shipName',
        name: 'ship_name',
        fieldLabel: 'Name of ship',
        bind: '{shipName}'
    }, {
        xtype: 'textfield',
        id: 'shipType',
        name: 'ship_type',
        fieldLabel: 'Type of ship',
        bind: '{shipType}'
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }]
});