Ext.define('LearnExt.store.Ship', {
    extend: 'Ext.data.Store',

    alias: 'store.ships',
    autoSync : true,
    
    fields: [
        'ship_name', 'ship_type', 'ship_flag'
    ],

    proxy: {
        type: 'direct',
        reader:{
            rootProperty: 'ships'
        },
        writer: {
            writeAllFields: false,
            rootProperty: 'ships'
        },
        api: {
            read: 'QueryDatabase.getResultsShips',
            update: 'QueryDatabase.updateShips'
        }
    },

    autoLoad: true

});
