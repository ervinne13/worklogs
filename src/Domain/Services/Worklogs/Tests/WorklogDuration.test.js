import { 
    breakDownDurationInMinutesToHoursAndMinutes,
    getDurationInMinutesFromBreakdown
} from 'Domain/Services/Worklogs/WorklogDuration';

describe("Worklog Duration Domain Service: breakDownDurationInMinutesToHoursAndMinutes", () => {
    test("it can breakdown/spread total minutes within an hour to hours and minutes", () => {
        const tests = [
            { fromMinutes: 0, toExpectedBreakdown: { hours: 0, minutes: 0 } },
            { fromMinutes: 10, toExpectedBreakdown: { hours: 0, minutes: 10 } },
        ];

        breakAllDownAndAssert(tests);
    });

    test("it can breakdown/spread total minutes more than an hour to hours and minutes", () => {
        const tests = [
            { fromMinutes: 61, toExpectedBreakdown: { hours: 1, minutes: 1 } },
            { fromMinutes: 100, toExpectedBreakdown: { hours: 1, minutes: 40 } },
        ];

        breakAllDownAndAssert(tests);
    });

    test("it can breakdown/spread total minutes beyond two or more hours to hours and minutes", () => {
        const tests = [
            { fromMinutes: 120, toExpectedBreakdown: { hours: 2, minutes: 0 } },
            { fromMinutes: 121, toExpectedBreakdown: { hours: 2, minutes: 1 } },
            { fromMinutes: 239, toExpectedBreakdown: { hours: 3, minutes: 59 } },
        ];

        breakAllDownAndAssert(tests);
    });
});

describe("Worklog Duration Domain Service: getDurationInMinutesFromBreakdown", () => {
    test("it can get total minutes from time within an hour", () => {
        const tests = [
            { fromBreakdown: { hours: 0, minutes: 0 }, toExpectedMinutes: 0 },
            { fromBreakdown: { hours: 0, minutes: 10 }, toExpectedMinutes: 10 },
        ];

        toTotalMinutesAndAssertAll(tests);
    });

    test("it can get total minutes from time that's more than an hour", () => {
        const tests = [
            { fromBreakdown: { hours: 1, minutes: 1 }, toExpectedMinutes: 61 },
            { fromBreakdown: { hours: 1, minutes: 40 }, toExpectedMinutes: 100 },
        ];

        toTotalMinutesAndAssertAll(tests);
    });

    test("it can get total minutes from time beyond two or more hours", () => {
        const tests = [
            { fromBreakdown: { hours: 2, minutes: 0 }, toExpectedMinutes: 120 },
            { fromBreakdown: { hours: 2, minutes: 1 }, toExpectedMinutes: 121 },
            { fromBreakdown: { hours: 3, minutes: 59 }, toExpectedMinutes: 239 },

            { fromBreakdown: { hours: 23, minutes: 59 }, toExpectedMinutes: 1439 },

            { fromBreakdown: { hours: 24, minutes: 0 }, toExpectedMinutes: 1440 },
            { fromBreakdown: { hours: 24, minutes: 1 }, toExpectedMinutes: 1441 },
            { fromBreakdown: { hours: 48, minutes: 0 }, toExpectedMinutes: 2880 },
        ];

        toTotalMinutesAndAssertAll(tests);
    });
});

const breakAllDownAndAssert = tests => {
    tests.forEach(({ fromMinutes, toExpectedBreakdown }) => {
        expect(breakDownDurationInMinutesToHoursAndMinutes(fromMinutes)).toStrictEqual(toExpectedBreakdown);
    });
};

const toTotalMinutesAndAssertAll = tests => {
    tests.forEach(({ fromBreakdown, toExpectedMinutes }) => {
        expect(getDurationInMinutesFromBreakdown(fromBreakdown)).toStrictEqual(toExpectedMinutes);
    });
};