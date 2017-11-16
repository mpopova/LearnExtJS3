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

        this.currentInfo = Ext.create('LearnExt.view.tree.TreeAdditionalInfoModel');
        
        this.currentInfo.update(dataForTmp);
    }
});
