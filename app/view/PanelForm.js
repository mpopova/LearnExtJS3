Ext.define('LearnExt.view.PanelForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'panelForm',

    title: 'Form',
    layout: 'form',

    requires: [
        'LearnExt.model.TestViewModel',
    ],

    // Always use this form when defining a view class. This
    // allows the creator of the component to pass data without
    // erasing the ViewModel type that we want.
    viewModel: {
        type: 'test'  // references alias "viewmodel.test"
    },

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        bind: '{firstName}'
    },{
        fieldLabel: 'Last Name',
        bind: '{lastName}'
    },
    ,{
        type: 'textfield',
        readOnly: true,
        disabled: true,
        fieldLabel: 'FullName',
        bind: '{name}'
    },
    {
        xtype: 'button',
        text: 'Submit',
        bind: {
           // html: '{!name} {name}', //false John Doe
            hidden: '{!name}'
        }
    }]

});
