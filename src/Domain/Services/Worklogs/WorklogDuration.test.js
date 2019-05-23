import { 
    breakDownDurationInMinutesToHoursAndMinutes,
    getDurationInMinutesFromBreakdown
} from './WorklogDuration';

describe("Worklog Duration Domain Service: breakDownDurationInMinutesToHoursAndMinutes", () => {
    test("it can breakdown/spread total minutes within an hour to hours and minutes", () => {
        expect(breakDownDurationInMinutesToHoursAndMinutes(0)).toStrictEqual({ hours: 0, minutes: 0 });
        expect(breakDownDurationInMinutesToHoursAndMinutes(10)).toStrictEqual({ hours: 0, minutes: 10 });
    });

    test("it can breakdown/spread total minutes more than an hour to hours and minutes", () => {    
        expect(breakDownDurationInMinutesToHoursAndMinutes(61)).toStrictEqual({ hours: 1, minutes: 1 });
        expect(breakDownDurationInMinutesToHoursAndMinutes(100)).toStrictEqual({ hours: 1, minutes: 40 });
    });

    test("it can breakdown/spread total minutes beyond two or more hours to hours and minutes", () => {
        expect(breakDownDurationInMinutesToHoursAndMinutes(120)).toStrictEqual({ hours: 2, minutes: 0 });
        expect(breakDownDurationInMinutesToHoursAndMinutes(121)).toStrictEqual({ hours: 2, minutes: 1 });
        expect(breakDownDurationInMinutesToHoursAndMinutes(239)).toStrictEqual({ hours: 3, minutes: 59 });
    });
});

describe("Worklog Duration Domain Service: getDurationInMinutesFromBreakdown", () => {
    test("it can get total minutes from time within an hour", () => {
        expect(getDurationInMinutesFromBreakdown({ hours: 0, minutes: 0 })).toStrictEqual(0);
        expect(getDurationInMinutesFromBreakdown({ hours: 0, minutes: 10 })).toStrictEqual(10);
    });

    test("it can get total minutes from time that's more than an hour", () => {
        expect(getDurationInMinutesFromBreakdown({ hours: 1, minutes: 1 })).toStrictEqual(61);
        expect(getDurationInMinutesFromBreakdown({ hours: 1, minutes: 40 })).toStrictEqual(100);
    });

    test("it can get total minutes from time beyond two or more hours", () => {
        expect(getDurationInMinutesFromBreakdown({ hours: 2, minutes: 0 })).toStrictEqual(120);
        expect(getDurationInMinutesFromBreakdown({ hours: 2, minutes: 1 })).toStrictEqual(121);
        expect(getDurationInMinutesFromBreakdown({ hours: 3, minutes: 59 })).toStrictEqual(239);

        expect(getDurationInMinutesFromBreakdown({ hours: 23, minutes: 59 })).toStrictEqual(1439);

        expect(getDurationInMinutesFromBreakdown({ hours: 24, minutes: 0 })).toStrictEqual(1440);
        expect(getDurationInMinutesFromBreakdown({ hours: 24, minutes: 1 })).toStrictEqual(1441);
        expect(getDurationInMinutesFromBreakdown({ hours: 48, minutes: 0 })).toStrictEqual(2880);
    });
});