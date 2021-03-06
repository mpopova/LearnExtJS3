Ext.define('LearnExt.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'LearnExt.model.main.MainModel',
        'LearnExt.model.ships.WindowShipInfoViewModel',

        'LearnExt.view.main.MainController',

        'LearnExt.view.heroes.HeroesList',

        'LearnExt.view.ships.ShipsList',
        'LearnExt.view.ships.ShipWindow',
        'LearnExt.view.ships.ShipWindowController',

        'LearnExt.view.tree.Tree',
        'LearnExt.view.tree.TreeController',

        'LearnExt.view.components.ComponentCustom',

        'LearnExt.view.PanelForm',
        'LearnExt.view.TabPanel',

        'LearnExt.view.simpsons.SimpsonList',

        'LearnExt.Variables'
    ],

    controller: 'main',

    viewModel: 'main',
    ui: 'navigation',

    tabPosition: 'top',
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Ships',
            iconCls: 'fa-ship',
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    items: [{
                        xtype: 'button',
                        text: 'Add',
                        id: 'addBtn',
                        iconCls: 'x-fa fa-plus',
                        handler: 'addRecord'
                    },
                    {
                        xtype: 'button',
                        text: 'Delete',
                        id: 'deleteBtn',
                        iconCls: 'x-fa fa-remove',
                        handler: 'deleteRecord'
                    }
                    ]
                },
                {
                    xtype: 'shipList'
                }
            ]
        },
        {
            title: 'Simpsons',
            iconCls: 'fa-pencil-square-o',
            items: [{
                xtype: 'simpsonList'
            }]
        },
        {
            xtype: 'tabPanel',
            iconCls: 'fa-table',
        },
        {
            xtype: 'panelForm',
            iconCls: 'fa-tasks',
        },
        {
            title: 'Component',
            iconCls: 'fa-building',
            layout: {
                type: 'vbox',
            },
            items: [
                {
                    xtype: 'splitbutton',
                    text: 'Navigation component - Toolbar'
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Choose state',
                    margin: 30
                }
            ]
        },
        {
            title: 'Tree',
            iconCls: 'fa-tree',
            id: 'mainTree',
            items: [{
                xtype: 'treeList'
            }]
        },
        {
            title: 'Heroes',
            iconCls: 'fa-user',
            items: [{
                xtype: 'heroesList'
            }]
    }]
});
