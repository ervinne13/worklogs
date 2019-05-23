const worklogs = [
    {
        id: 1,
        date: '2019-05-09',
        status: 'awaiting_synchronization',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000002", name: "Development" },
        loggedMins: 230,
        timeFrom: null,
        timeTo: null
    },
    {
        id: 2,
        date: '2019-05-09',
        status: 'awaiting_synchronization',
        project: { id: "P-000002", name: "Project Juniper" },
        task: { id: "PT-000003", name: "Document Creation" },
        loggedMins: 120,
        timeFrom: null,
        timeTo: null
    },
    {
        id: 3,
        date: '2019-05-09',
        status: 'awaiting_synchronization',
        project: { id: "P-000001", name: "Tech Team Tasks" },
        task: { id: "PT-000004", name: "Meeting" },
        loggedMins: 180,
        timeFrom: null,
        timeTo: null
    },
    {
        id: 4,
        date: '2019-05-09',
        status: 'awaiting_synchronization',
        project: { id: "P-000001", name: "Tech Team Tasks" },
        task: { "id": "PT-000003", "name": "Document Creation" },
        loggedMins: 181,
        timeFrom: null,
        timeTo: null
    }
];

export default worklogs;