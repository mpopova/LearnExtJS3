/**
 * This view is an example list of people.
 */
Ext.define('LearnExt.view.heroes.HeroesList', {
    extend: 'Ext.grid.Panel',
    xtype: 'heroesList',

    requires: [
        'LearnExt.store.Hero'
    ],

    title: 'Heroes',

    store: {
        type: 'heroesStore'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
