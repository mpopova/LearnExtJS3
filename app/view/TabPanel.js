Ext.define('LearnExt.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabPanel',

    title: 'Tab Panel',

    width: 400,
    height: 400,
    activeTab: 1,
    tabPosition: 'left',

    items: [{
        title: 'Foo'
    }, {
        title: 'Bar',
        tabConfig: {
            title: 'Custom Title',
            tooltip: 'A button tooltip'
        }
    }]

});
