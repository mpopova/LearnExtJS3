/**
 * This view is an example list of people.
 */
Ext.define('LearnExt.view.heroes.HeroesList', {
    extend: 'Ext.grid.Panel',
    xtype: 'heroesList',

    requires: [
        'LearnExt.store.Personnel'
    ],

    title: 'Heroes',

    store: {
        type: 'personnel'
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
