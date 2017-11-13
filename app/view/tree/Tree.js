Ext.define('LearnExt.view.tree.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'treeList',
    requires: [
        'LearnExt.store.TreeStore'
    ],
    title: 'Simple Tree',
    width: 200,
    height: 200,
    store: {
        type: 'treeStore'
    },
    rootVisible: false,

});
