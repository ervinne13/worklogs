
export const seed = () => {
    const trackingNumberSetupSet = [
        {
            module: 'worklogs',
            code: 'WL',
            isActive: true,
            generationStrategy: 'daily-sequence',
            lastTNUsed: null,
            lastNumberUsed: 0,
            startingNumber: 1,
            endingNumber: 99999
        },
        {
            module: 'projects',
            code: 'P',
            isActive: true,
            generationStrategy: 'sequence',
            lastTNUsed: null,
            lastNumberUsed: 0,
            startingNumber: 1,
            endingNumber: 999999
        },
        {
            module: 'tasks',
            code: 'T',
            isActive: true,
            generationStrategy: 'sequence',
            lastTNUsed: null,
            lastNumberUsed: 0,
            startingNumber: 1,
            endingNumber: 999999
        }
    ];
};