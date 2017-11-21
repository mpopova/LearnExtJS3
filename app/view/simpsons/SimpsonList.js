Ext.define('LearnExt.view.simpsons.SimpsonList', {
    extend: 'Ext.grid.Panel',
    xtype: 'simpsonList',

    requires: [
        'LearnExt.store.Simpsons'
    ],

    store: {
        type: 'simpsons'
    },
    columns: [
        {header: 'Name', dataIndex: 'name', editor: 'textfield'},
        {header: 'Email', dataIndex: 'email', flex:1,
            editor: {
                completeOnEnter: false,

                // If the editor config contains a field property, then
                // the editor config is used to create the Ext.grid.CellEditor
                // and the field property is used to create the editing input field.
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        },
        {header: 'Phone', dataIndex: 'phone'}
    ],
    selModel: 'cellmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    height: 200,
    width: 400
    // renderTo: Ext.getBody()
});