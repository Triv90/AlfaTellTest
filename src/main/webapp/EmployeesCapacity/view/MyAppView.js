Ext.define('EmployeesCapacity.view.MyAppView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.myAppView',
    layout: 'border',
    items: [
        {
            xtype: 'capacityView',
            region: 'center'
        },
        {
            xtype: 'requestView',
            title: 'Request',
            region: 'north',
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});
