Ext.define('LearnExt.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    proxy: {
        type: 'direct',
        reader:{
            rootProperty: 'heroes'
        },
        api: {
            read: 'QueryDatabase.getResults',
        }
    },
});
