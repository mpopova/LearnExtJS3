Ext.define('LearnExt.store.TreeStore', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.treeStore',

    root: {
        expanded: true,
        children: [
            { text: 'detention', leaf: true },
            { text: 'homework', expanded: true, children: [
                { text: 'book report', leaf: true },
                { text: 'algebra', leaf: true}
            ] },
            { text: 'buy lottery tickets', leaf: true }
        ]
    }

});
