// clientInvoicesDescriptions.ts

import { INodeProperties } from 'n8n-workflow';

// Descriptions for the "List client invoices" operation
export const clientsInvoicesOperations: INodeProperties[] = [

// ------------------------
//      Client Invoice
// ------------------------

{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				'clientsInvoices',
			],
		},
	},
	options: [
		{
			name: 'List Client Invoices',
			value: 'listInvoices',
			action: 'List client invoices',
		},
		{
			name: 'Create a Client Invoice',
			value: 'createClientInvoice',
			action: 'Create a client invoice',
		},
		{
			name: 'Show Client Invoice',
			value: 'showClientInvoice',
			action: 'Show client invoice',
		},
	],
	default: 'listInvoices',
},
// ------------------------
//      Client Invoice - List client invoices
// ------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'clientsInvoices',
				],
				operation: [
					'listInvoices',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'clientsInvoices',
				],
				operation: [
					'listInvoices',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'clientsInvoices',
                ],
                operation: [
                    'listInvoices',
                ],
            },
        },
        options: [
            {
                displayName: 'Created At From',
                name: 'created_at_from',
                type: 'dateTime',
                default: '',
                description: 'Filter invoices created from this date',
            },
            {
                displayName: 'Created At To',
                name: 'created_at_to',
                type: 'dateTime',
                default: '',
                description: 'Filter invoices created up to this date',
            },
            {
                displayName: 'Due Date',
                name: 'due_date',
                type: 'dateTime',
                default: '',
                description: 'Filter invoices by exact due date',
            },
            {
                displayName: 'Due Date From',
                name: 'due_date_from',
                type: 'dateTime',
                default: '',
                description: 'Filter invoices with due date from this date',
            },
            {
                displayName: 'Due Date To',
                name: 'due_date_to',
                type: 'dateTime',
                default: '',
                description: 'Filter invoices with due date up to this date',
            },
            {
                displayName: 'Exclude Imported',
                name: 'exclude_imported',
                type: 'boolean',
                default: false,
                description: 'Whether to exclude imported invoices',
            },
            {
                displayName: 'Sort By',
                name: 'sort_by',
                type: 'options',
                options: [
                    {
                        name: 'Created At (Ascending)',
                        value: 'created_at:asc',
                    },
                    {
                        name: 'Created At (Descending)',
                        value: 'created_at:desc',
                    },
                    {
                        name: 'Due Date (Ascending)',
                        value: 'due_date:asc',
                    },
                    {
                        name: 'Due Date (Descending)',
                        value: 'due_date:desc',
                    },
                ],
                default: 'created_at:desc',
                description: 'Sort invoices by a specific property and order',
            },
            {
                displayName: 'Status',
                name: 'status',
                type: 'multiOptions',
                options: [
                    { name: 'Cancelled', value: 'cancelled' },
                    { name: 'Draft', value: 'draft' },
                    { name: 'Overdue', value: 'overdue' },
                    { name: 'Paid', value: 'paid' },
                    { name: 'Pending', value: 'pending' },
                    { name: 'Sent', value: 'sent' },
                ],
                default: [],
                description: 'Filter client invoices by their payment status',
            },
            {
                displayName: 'Updated At From',
                name: 'updated_at_from',
                type: 'dateTime',
                default: '',
                description: 'Filter invoices updated from this date',
            },
            {
                displayName: 'Updated At To',
                name: 'updated_at_to',
                type: 'dateTime',
                default: '',
                description: 'Filter invoices updated up to this date',
            },
        ],
    },

// ------------------------
//      Client Invoice - Create a client invoice
// ------------------------

    {
        displayName: 'Organization ID',
        name: 'organizationId',
        type: 'string',
				displayOptions: {
					show: {
						resource: [
							'clientsInvoices',
						],
						operation: [
							'createClientInvoice',
						],
					},
				},
        default: '',
        required: true,
        description: 'The unique identifier of the organization for which the client invoice will be created',
    },
    {
        displayName: 'Client Invoice',
        name: 'clientInvoice',
        type: 'fixedCollection',
				displayOptions: {
					show: {
						resource: [
							'clientsInvoices',
						],
						operation: [
							'createClientInvoice',
						],
					},
				},
        typeOptions: {
            multipleValues: false,
        },
        default: {},
        required: true,
        description: 'Details of the client invoice to be created',
        options: [
            {
                displayName: 'Invoice Details',
                name: 'invoiceDetails',
                values: [
													{
														displayName: 'Amount',
														name: 'amount',
														type: 'number',
														default: '',
															required:	true,
														description: 'Amount of the client invoice',
													},
													{
														displayName: 'Currency',
														name: 'currency',
														type: 'string',
														default: 'EUR',
															required:	true,
														description: 'Currency of the client invoice',
													},
													{
														displayName: 'Description',
														name: 'description',
														type: 'string',
														default: '',
														description: 'Description or details of the client invoice',
													},
													{
														displayName: 'Due Date',
														name: 'dueDate',
														type: 'dateTime',
														default: '',
															required:	true,
														description: 'Due date for the client invoice payment',
													},
													{
														displayName: 'Invoice Date',
														name: 'invoiceDate',
														type: 'dateTime',
														default: '',
															required:	true,
														description: 'Date of the client invoice',
													},
													{
														displayName: 'Invoice Number',
														name: 'invoiceNumber',
														type: 'string',
														default: '',
															required:	true,
														description: 'Unique number of the client invoice',
													},
												],
            },
        ],
    },

// ------------------------
//      Client Invoice - Show client invoice
// ------------------------

];
