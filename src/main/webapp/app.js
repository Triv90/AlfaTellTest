/**
 * Created by vechk on 13.01.2016.
 */

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



Ext.application({
    name: 'EmployeesCapacity',

    appFolder : 'EmployeesCapacity',
    requires: [
        'EmployeesCapacity.view.CapacityView',
        'EmployeesCapacity.view.RequestView',
        'EmployeesCapacity.view.MyAppView'
    ],
    views: [
        'CapacityView',
        'RequestView',
        'MyAppView'
    ],
    controllers : [
        'MyAppController'
    ],
    stores : [
        'CapacityStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'myAppView',
            }
        });
    }
});