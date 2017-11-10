Ext.define('LearnExt.store.Ship', {
    extend: 'Ext.data.Store',

    alias: 'store.ships',

    fields: [
        'ship_name', 'ship_type', 'ship_flag'
    ],

    proxy: {
        type: 'direct',
        reader:{
            rootProperty: 'ships'
        },
        api: {
            read: 'QueryDatabase.getResultsShips',
        }
    },

    autoLoad: true

});
