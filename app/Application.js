/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('LearnExt.Application', {
    extend: 'Ext.app.Application',

    name: 'LearnExt',


    // requires:[
    //     'Ext',
    //     'Ext.Base',
    //     'Ext.app.*',
    //     'Ext.state.*',
    //     'Ext.direct.*',
    //     'Ext.data.*',
    //     'Ext.Loader',
    //     'Ext.util.*'
    // ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        Ext.direct.Manager.addProvider(Ext.REMOTING_API);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
