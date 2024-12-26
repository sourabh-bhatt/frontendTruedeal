export const safeWindowOpen = (url: string, target: string = '_blank') => {
    if (typeof window !== 'undefined') {
        window.open(url, target);
    }
};

