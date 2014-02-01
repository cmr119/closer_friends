Ext.application({
    name: 'HelloExt',
    launch: function () {
        function onButtonClick(btn) {
            Ext.example.msg('Button Click', 'You clicked the "{0}" button.', btn.displayText || btn.text);
        }

        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello Ext',
                    html: 'Hello! Welcome to Ext JS.'
                }
            ]
        });
    }
});