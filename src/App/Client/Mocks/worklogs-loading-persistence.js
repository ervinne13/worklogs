const worklogs = [
    {
        id: 1,
        status: 'awaiting_synchronization',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000002", name: "Development" },
        loggedMins: 230
    },
    {
        id: 2,
        status: 'awaiting_synchronization',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000003", name: "Document Creation" },
        loggedMins: 120
    },
    {
        id: 3,
        status: 'awaiting_persistence',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000004", name: "Internal Meeting" },
        loggedMins: 65
    }
];

export default worklogs;