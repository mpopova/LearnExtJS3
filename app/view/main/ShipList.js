/**
 * This view is an example list of people.
 */
Ext.define('LearnExt.view.main.ShipList', {
    extend: 'Ext.grid.Panel',
    xtype: 'shipList',

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
    // ,

    // listeners: {
    //     celldblclick: 'onPopupForm',
    //     select: function (rowmodel, record, index, eOpts) {
    //         // debugger
    //         // Set selected record
    //         this.getViewModel().set('ship', record);
    //         console.log('record');
    //
    //         // Show details
    //         this.showView('Latest.view.ship.ShipWindow');
    //     }
    // }
});
