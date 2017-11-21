Ext.define('LearnExt.store.Ship', {
    extend: 'Ext.data.Store',
    storeId: 'shipsStore',
    alias: 'store.ships',
    
    fields: [
        'ship_id','ship_name', 'ship_type', 'ship_flag'
    ],

    proxy: {
        type: 'direct',
        reader:{
            rootProperty: 'ships'
        },
        writer: {
            type: 'json',
            rootProperty: 'data'
        },
        
        api: {
            read: 'QueryDatabase.getResultsShips',
            update: 'QueryDatabase.updateShips',
            write: 'QueryDatabase.addShips'
        }
    },

    autoLoad: true
    

});
