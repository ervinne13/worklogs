
export const breakDownDurationInMinutesToHoursAndMinutes = function(duration) {
    let hours = Math.floor(duration / 60);
    let minutes = Math.round(duration - (hours * 60));

    //  can be configured with configureToIncludeUnits
    if (this && this.includeUnits) {        
        hours = getHoursWithUnit(hours);
        minutes = getMinutesWithUnit(minutes);
    }

    return { hours, minutes };
};

export const getDurationInMinutesFromBreakdown = function({ hours, minutes }) {
    let duration = (hours * 60) + minutes;

    //  can be configured with configureToIncludeUnits
    if (this && this.includeUnits) {
        duration = getMinutesWithUnit(duration);
    }

    return duration;
};

export const getHoursWithUnit = hours => {
    return `${ hours } ${ hours > 1 ? 'Hours' : 'Hour' }`;
};

export const getMinutesWithUnit = minutes => {
    return minutes ? `${ minutes } ${ minutes > 1 ? 'Minutes' : 'Minute' }` : '';
};

export const configureToIncludeUnits = functionToConfigure => {
    return functionToConfigure.bind({ includeUnits: true });
};