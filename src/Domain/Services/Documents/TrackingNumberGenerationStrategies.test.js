
import { generateDailyBased } from './TrackingNumberGenerationStrategies';

import TrackingNumberGenerationFailedError from './Errors/TrackingNumberGenerationFailedError';

let dateNowSpy;
beforeAll(() => {
    dateNowSpy = jest
        .spyOn(Date, 'now')
        .mockImplementation(
            () => new Date(Date.UTC(2019, 0, 1)).valueOf()
        );
});

afterAll(() => {
    // Unlock Time
    dateNowSpy.mockRestore();
});

describe("Tracking number daily based generation strategy", () => {
    test("it can generate tracking numbers based on date today", () => {        
        const tnSetup1 = { module: 'test', code: 'T', lastNumberUsed: 0, endingNumber: 99999 };
        expect(generateDailyBased(tnSetup1))
            .toEqual({ 
                lastNumberUsed: 1,
                trackingNumber: `T-20190101-00001`
            });

        const tnSetup2 = { module: 'test', code: 'T', lastNumberUsed: 500, endingNumber: 99999 };
        expect(generateDailyBased(tnSetup2))
            .toEqual({ 
                lastNumberUsed: 501,
                trackingNumber: `T-20190101-00501`
            });
    });

    test("it fails to generate if no more tracking number is available", () => {        
        const tnSetup1 = { module: 'test', code: 'T', lastNumberUsed: 99999, endingNumber: 99999 };        
        expect(() => generateDailyBased(tnSetup1))
            .toThrow(TrackingNumberGenerationFailedError.createFromNumberLimitReached('test'));
    });
});
