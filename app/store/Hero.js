Ext.define('LearnExt.store.Hero', {
    extend: 'Ext.data.Store',

    alias: 'store.heroesStore',

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

    autoLoad: true

});
