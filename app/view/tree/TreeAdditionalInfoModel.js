Ext.define('LearnExt.view.tree.TreeAdditionalInfoModel', {
    extend: 'Ext.panel.Panel',

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
});
