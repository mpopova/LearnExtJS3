Ext.define('LearnExt.view.tree.TreeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.treeController',

    showTreeInfo: function (sender, record) {
        var dataForTmp = {
            infoName: record.data.text,
        };

        if(this.currentInfo){
           Ext.getCmp('detailInfo').destroy();
        };

        this.currentInfo = Ext.create('Ext.panel.Panel',{
            id: 'detailInfo',
            renderTo: 'mainTree',
            frame: true,
            floating: true,
            title: 'Additional info',
            width: 400,
            height: 200,
            region: 'center',

            tpl: [
                '<p>Name: {infoName}</p>',
            ]
        })
        
        this.currentInfo.update(dataForTmp);
    }
});
