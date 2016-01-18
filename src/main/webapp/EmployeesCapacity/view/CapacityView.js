Ext.define('EmployeesCapacity.view.CapacityView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.capacityView',
    store: 'CapacityStore',
    frame: true,
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'Number',
            flex: 1,
            sortable: true,
            dataIndex: 'number',
        },
        {
            flex: 2,
            text: 'EmployeeKey',
            sortable: true,
            dataIndex: 'key',
        },
        {
            flex: 3,
            text: 'TotalCapacity',
            sortable: true,
            dataIndex: 'capacity',
        }
    ]
});
