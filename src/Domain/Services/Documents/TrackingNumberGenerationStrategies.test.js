
import { 
    generateDailySequence,
    generateStraightSequence,
} from './TrackingNumberGenerationStrategies';

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

    test("it fails to generate if no more tracking number limit is reached", () => {
        expectGeneratorToThrowLimitReachedWhenRan(generateDailySequence);
    });
});

describe("Tracking number straight generation strategy", () => {
    test("it can generate tracking numbers", () => {        
        const tnSetup1 = { module: 'test', code: 'T', lastNumberUsed: 0, endingNumber: 99999 };
        expect(generateStraightSequence(tnSetup1))
            .toEqual({ 
                lastNumberUsed: 1,
                trackingNumber: `T-00001`
            });

        const tnSetup2 = { module: 'test', code: 'T', lastNumberUsed: 500, endingNumber: 99999 };
        expect(generateStraightSequence(tnSetup2))
            .toEqual({ 
                lastNumberUsed: 501,
                trackingNumber: `T-00501`
            });

        const tnSetup3 = { module: 'test', code: 'T', lastNumberUsed: 0, endingNumber: 10 };
        expect(generateStraightSequence(tnSetup3))
            .toEqual({ 
                lastNumberUsed: 1,
                trackingNumber: `T-01`
            });
    });

    test("it fails to generate if no more tracking number limit is reached", () => {
        expectGeneratorToThrowLimitReachedWhenRan(generateStraightSequence);
    });
});

const expectGeneratorToThrowLimitReachedWhenRan = generator => {
    const module = 'test';
    const tnExpiredSetup = { code: 'T', lastNumberUsed: 99999, endingNumber: 99999, module };        
    expect(() => generator(tnExpiredSetup))
        .toThrow(TrackingNumberGenerationFailedError.createFromNumberLimitReached('test'));

    const tnBadSetup1 = { code: 'T', lastNumberUsed: 120, endingNumber: 0, module };        
    expect(() => generator(tnBadSetup1))
        .toThrow(TrackingNumberGenerationFailedError.createFromNumberLimitReached('test'));

    const tnBadSetup2 = { code: 'T', lastNumberUsed: 0, endingNumber: -50, module };        
    expect(() => generator(tnBadSetup2))
        .toThrow(TrackingNumberGenerationFailedError.createFromNumberLimitReached('test'));
};