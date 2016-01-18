Ext.define('EmployeesCapacity.store.CapacityStore', {
    extend: 'Ext.data.Store',
    requires : [
        'EmployeesCapacity.model.CapacityModel'
    ],
    model: 'EmployeesCapacity.model.CapacityModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'capacity',
            read: 'capacity',
            destroy: 'capacity',
            update: 'capacity'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});
