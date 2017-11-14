Ext.define('LearnExt.view.tree.TreeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.treeController',

    showTreeInfo: function (sender, record) {
        if(this.currentInfo){
           Ext.getCmp('detailInfo').destroy();
        };

        this.currentInfo = Ext.create('Ext.Component',{
            renderTo: 'panel-1013-innerCt',
            frame: true,
            floating: true,
            title: 'Here',
            width: 580,
            height: 100,
            layout: 'border',
            xtype: 'textfield',
            id: 'detailInfo',
            region: 'center',
            html: record.data.text
        })
    }
});
