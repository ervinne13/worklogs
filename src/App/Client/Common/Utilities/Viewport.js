
export const isViewportSmall = () => {
    //  be lax about the existence of window, possible when we're server side rendering
    if (typeof window === 'undefined') {
        return false;
    }

    //  about iphone 6/7 or smaller
    return window.innerWidth < 480;
};