
import TrackingNumberGenerationFailedError from './Errors/GenerationFailedError';

export const expectGeneratorToThrowLimitReachedWhenRan = generator => {
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
