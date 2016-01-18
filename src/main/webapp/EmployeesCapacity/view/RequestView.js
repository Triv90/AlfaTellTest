Ext.define('EmployeesCapacity.view.RequestView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.requestView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'panel',
            border: false,
            frame: false,
            layout: 'column',
            items: [{
                border: false,
                frame: false,
                columnWidth: '.5',
                layout: 'form',
                items: [{
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'Datetime from:',
                    name: 'dateFrom',
                    // The value matches the format; will be parsed and displayed using that format.
                    format: 'm d Y'
                },
                    {
                        xtype: 'timefield',
                        name: 'timeFrom',
                        increment: 30,
                        anchor: '100%'
                    }]
            }, {
                border: false,
                frame: false,
                columnWidth: '.5',
                layout: 'form',
                items: [{
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'Datetime from:',
                    name: 'dateTo',
                    // The value matches the format; will be parsed and displayed using that format.
                    format: 'm d Y'
                },
                    {
                        xtype: 'timefield',
                        name: 'timeTo',
                        increment: 30,
                        anchor: '100%'
                    }]
            }]
        }
    ]
});