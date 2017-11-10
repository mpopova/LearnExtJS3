Ext.define('LearnExt.view.ships.ShipsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'shipList',
    controller: 'windowShip',
    requires: [
        'LearnExt.store.Ship'
    ],

    title: 'Ships',

    store: {
        type: 'ships'
    },

    columns: [
        { text: 'Name',  dataIndex: 'ship_name' },
        { text: 'Type', dataIndex: 'ship_type', flex: 1 },
        { text: 'Flag', dataIndex: 'ship_flag', flex: 1 }
    ]
    ,

    listeners: {
        celldblclick: 'onPopupForm'
    }
});
