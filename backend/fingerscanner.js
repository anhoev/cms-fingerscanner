'use strict';

module.exports = (cms) => {

    const {mongoose, utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

    const Company = cms.registerSchema({
        name: {type: String, default: 'Name'}
    }, {
        name: 'Company',
        formatter: `
            <h4>{{model.name}}</h4>
        `,
        title: 'name',
        isViewElement: false,
        mTemplate: `
            <StackLayout>
                <Label text="{{model.name}}"></Label>
            </StackLayout>
        `
    });


    const Employee = cms.registerSchema({
        name: String,
        company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', autopopulate: true},
        fingerTemplate: [{
            template: String,
            size: Number
        }],
        active: Boolean
    }, {
        name: 'Employee',
        formatter: `
            <h4>{{model.name}}</h4>
        `,
        title: 'name',
        isViewElement: false,
        mTemplate: `
            <StackLayout>
                <Label [text]="model.name"></Label>
            </StackLayout>
        `,
        fn: {},
        autopopulate: true
    });

    const CheckEvent = cms.registerSchema({
        time: {type: Date, default: Date.now},
        isCheckIn: {type: Boolean, default: true},
        employee: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', autopopulate: true}
    }, {
        name: 'CheckEvent',
        formatter: `
            <h4>{{model.time}}</h4>
        `,
        title: 'time',
        isViewElement: false,
        mTemplate: `
            <StackLayout>
                <Label [text]="model.time"></Label>
            </StackLayout>
        `,
        fn: {},
        autopopulate: true
    });

    cms.registerWrapper('BioControl', {
        formatter: `
        <h4>BioControl</h4>
    `,
        mTemplate: `
    <StackPanel bioControl></StackPanel>
    `,
        fn: {},
        serverFn: {}
    });

    cms.registerWrapper('EmployeeList', {
        formatter: `
        <h4>EmployeeList</h4>
    `,
        mTemplate: `
    <StackPanel employeeList></StackPanel>
    `,
        fn: {},
        serverFn: {}
    });
}