Ext.define('EmployeesCapacity.model.CapacityModel', {
    extend: 'Ext.data.Model',
    fields: ['number', 'key', 'capacity'],
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