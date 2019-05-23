const worklogs = [
    {
        id: 1,
        date: '2019-05-09',
        status: 'awaiting_synchronization',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000002", name: "Development" },
        loggedMins: 230
    },
    {
        id: 2,
        date: '2019-05-09',
        status: 'awaiting_synchronization',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000003", name: "Document Creation" },
        loggedMins: 120
    },
    {
        id: 3,
        date: '2019-05-09',
        status: 'awaiting_persistence',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000004", name: "Internal Meeting" },
        loggedMins: 65
    }
];

export default worklogs;