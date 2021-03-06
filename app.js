Ext.application({
    name: 'LearnExt',

    extend: 'LearnExt.Application',

    requires: [
        'LearnExt.view.main.Main',
        'Ext',
        'Ext.Base',
        'Ext.app.*',
        'Ext.state.*',
        'Ext.direct.*',
        'Ext.data.*',
        'Ext.Loader',
        'Ext.util.*'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'LearnExt.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to LearnExt.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
