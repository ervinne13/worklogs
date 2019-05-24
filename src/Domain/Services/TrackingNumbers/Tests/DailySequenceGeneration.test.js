
import { generateDailySequence } from 'Domain/Services/TrackingNumbers/GenerationStrategies';
import { expectGeneratorToThrowLimitReachedWhenRan } from './utilities';

let dateNowSpy;
beforeAll(() => {
    dateNowSpy = jest
        .spyOn(Date, 'now')
        .mockImplementation(
            () => new Date(Date.UTC(2019, 0, 1)).valueOf()
        );
});

afterAll(() => {
    dateNowSpy.mockRestore();
});

describe("Tracking number daily sequence generation strategy", () => {
    test("it can generate tracking numbers based on date today", () => {        
        const tnSetup1 = { module: 'test', code: 'T', lastNumberUsed: 0, endingNumber: 99999 };
        expect(generateDailySequence(tnSetup1))
            .toEqual({ 
                lastNumberUsed: 1,
                trackingNumber: `T-20190101-00001`
            });

        const tnSetup2 = { module: 'test', code: 'T', lastNumberUsed: 500, endingNumber: 99999 };
        expect(generateDailySequence(tnSetup2))
            .toEqual({ 
                lastNumberUsed: 501,
                trackingNumber: `T-20190101-00501`
            });
    });

    test("it adjusts sequence based on ending number", () => {
        const tnSetup1 = { module: 'test', code: 'T', lastNumberUsed: 0, endingNumber: 10 };
        expect(generateDailySequence(tnSetup1))
            .toEqual({ 
                lastNumberUsed: 1,
                trackingNumber: `T-20190101-01`
            });

        const tnSetup2 = { module: 'test', code: 'T', lastNumberUsed: 20, endingNumber: 50 };
        expect(generateDailySequence(tnSetup2))
            .toEqual({ 
                lastNumberUsed: 21,
                trackingNumber: `T-20190101-21`
            });
    });

    test("it fails to generate if no more tracking number limit is reached", () => {
        expectGeneratorToThrowLimitReachedWhenRan(generateDailySequence);
    });
});