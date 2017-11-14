Ext.define('LearnExt.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'LearnExt.view.main.MainController',
        'LearnExt.view.main.MainModel',
        'LearnExt.view.heroes.HeroesList',
        'LearnExt.view.ships.ShipsList',

        'LearnExt.view.ships.TestViewModel',

        'Latest.view.ships.ShipWindow',
        'Latest.view.ships.ShipWindowController',

        'LearnExt.view.tree.Tree',
        'LearnExt.view.tree.TreeController',

        'LearnExt.view.components.ComponentCustom'

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
            title: 'Component',
            iconCls: 'fa-building',
            // xtype: 'componentCustom'
            // items: [{
            //     xtype: 'componentCustom'
            // }]
            layout: {
                type: 'hbox',
            },
            items: [
                {
                    xtype: 'splitbutton',
                    text: 'Navigation component - Toolbar'
                }
            ]
        },
        {
            title: 'Tree',
            iconCls: 'fa-tree',
            items: [{
                xtype: 'treeList'
            }]
        },
        {
            title: 'Ships',
            iconCls: 'fa-ship',
            items: [{
                xtype: 'shipList'
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
