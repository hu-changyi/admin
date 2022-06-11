define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'customer/index' + location.search,
                    add_url: 'customer/add',
                    edit_url: 'customer/edit',
                    del_url: 'customer/del',
                    multi_url: 'customer/multi',
                    import_url: 'customer/import',
                    table: 'customer',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'created_at', title: __('Created_at'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'contact_level', title: __('Contact_level'), operate: 'LIKE'},
                        {field: 'customer_name', title: __('Customer_name'), operate: 'LIKE'},
                        {field: 'province', title: __('Province'), operate: 'LIKE'},
                        {field: 'city', title: __('City'), operate: 'LIKE'},
                        {field: 'district', title: __('District'), operate: 'LIKE'},
                        {field: 'street', title: __('Street'), operate: 'LIKE'},
                        {field: 'basic_contact_level', title: __('Basic_contact_level'), operate: 'LIKE'},
                        {field: 'brand_activity_level', title: __('Brand_activity_level'), operate: 'LIKE'},
                        {field: 'train_level', title: __('Train_level'), operate: 'LIKE'},
                        {field: 'others', title: __('Others')},
                        {field: 'source', title: __('Source'), operate: 'LIKE'},
                        {field: 'info_update', title: __('Info_update')},
                        {field: 'receipt_letter', title: __('Receipt_letter')},
                        {field: 'website_demand', title: __('Website_demand')},
                        {field: 'is_build_website', title: __('Is_build_website')},
                        {field: 'is_star', title: __('Is_star')},
                        {field: 'commercial_channels', title: __('Commercial_channels'), operate: 'LIKE'},
                        {field: 'isq_contact_id', title: __('Isq_contact_id')},
                        {field: 'type', title: __('Type'), operate: 'LIKE'},
                        {field: 'updated_at', title: __('Updated_at'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'customer_addr', title: __('Customer_addr'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
