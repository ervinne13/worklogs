
import { ValidationError } from 'yup';
import { validateWorklog } from 'Domain/Services/Worklogs';

const baseValidWorklog = {
    id: "WL-00001",
    logDate: '2019-05-09',
    status: 'awaiting_synchronization',
    project: { id: "P-000002", name: "Project Juniper" },
    task: { id: "PT-000002", name: "Development" },
    loggedMins: 230
};

const expectValidationResultToBeUndefined = invalidWorklog => 
    expect(invalidWorklog).toBeUndefined()

// TODO: validate id

describe("Worklog validation", () => {
    test("it should pass valid worklog", () => {
        return validateWorklog(baseValidWorklog)
            .catch(e => {
                expect(e).toBeUndefined();
            })
            .then(validWorklog => expect(validWorklog).toEqual(baseValidWorklog));
    });

    test("it can validate missing log minutes", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.loggedMins;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.message).toBe('The field loggedMins of worklog is required');
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate invalid log minutes (negative value)", () => {        
        let worklog = { ...baseValidWorklog };
        worklog.loggedMins = -12;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.message).toBe('The field loggedMins must be greater than 1 to be valid');
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate invalid log minutes (non numeric)", () => {
        let worklog = { ...baseValidWorklog };
        worklog.loggedMins = "erftghjk";

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.message).toBe('The field loggedMins must be numeric');
            }).then(expectValidationResultToBeUndefined);
    });    

    test("it can validate missing log date", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.logDate;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.errors).toEqual(
                    expect.arrayContaining([ 'The field logDate of worklog is required' ])
                );
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate invalid log date", () => {
        let worklog = { ...baseValidWorklog };
        worklog.logDate = '19922323';

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.errors).toEqual(
                    expect.arrayContaining([ 'Date format must be YYYY-MM-DD' ])
                );
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate missing project", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.project;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)                
                expect(e.errors).toEqual(
                    expect.arrayContaining([ 
                        "The field id of worklog's project is required", 
                        "The field name of worklog's project is required"
                    ])
                );
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate missing project id", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.project.id;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.errors).toEqual(
                    expect.arrayContaining([ "The field id of worklog's project is required" ])
                );
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate missing project name", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.project.name;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.errors).toEqual(
                    expect.arrayContaining([ "The field name of worklog's project is required" ])
                );
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate missing task id", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.task;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.errors).toEqual(
                    expect.arrayContaining([ 
                        "The field id of worklog's task is required", 
                        "The field name of worklog's task is required"
                    ])
                );
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate missing task id", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.task.id;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.errors).toEqual(
                    expect.arrayContaining([ "The field id of worklog's task is required" ])
                );
            }).then(expectValidationResultToBeUndefined);
    });

    test("it can validate missing task name", () => {
        let worklog = { ...baseValidWorklog };
        delete worklog.task.name;

        return validateWorklog(worklog)
            .catch(e => {
                expect(e).toBeInstanceOf(ValidationError)
                expect(e.errors).toEqual(
                    expect.arrayContaining([ "The field name of worklog's task is required" ])
                );
            }).then(expectValidationResultToBeUndefined);
    });
});