
import { generateStraightSequence } from 'Domain/Services/TrackingNumbers/GenerationStrategies';
import { expectGeneratorToThrowLimitReachedWhenRan } from './utilities';

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

        
    });

    test("it adjusts sequence based on ending number", () => {
        const tnSetup1 = { module: 'test', code: 'T', lastNumberUsed: 0, endingNumber: 10 };
        expect(generateStraightSequence(tnSetup1))
            .toEqual({ 
                lastNumberUsed: 1,
                trackingNumber: `T-01`
            });

            const tnSetup2 = { module: 'test', code: 'T', lastNumberUsed: 21, endingNumber: 30 };
            expect(generateStraightSequence(tnSetup2))
                .toEqual({ 
                    lastNumberUsed: 22,
                    trackingNumber: `T-22`
                });
    });

    test("it fails to generate if no more tracking number limit is reached", () => {
        expectGeneratorToThrowLimitReachedWhenRan(generateStraightSequence);
    });
});