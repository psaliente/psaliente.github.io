
const useCommonHook = () => {
    const mapLanguageToColor = (language: string): string => {
        const key = language.charAt(0).toLowerCase();

        switch (key) {
            case '.': return 'bg-violet-500';
            case 'a': return 'bg-red-500';
            case 'c': return 'bg-purple-500';
            case 'j': return 'bg-yellow-500';
            case 'k': return 'bg-orange-500';
            case 'm': return 'bg-green-500';
            case 'p': return 'bg-fuchsia-500';
            case 'r': return 'bg-sky-500';
            case 's': return 'bg-cyan-500';
            case 't': return 'bg-blue-500';
            default: return 'bg-gray-500';
        }
    };

    const isEven = (value: number): boolean => value % 2 === 0;

    const isOdd = (value: number): boolean => !isEven(value);
    
    const trimText2Elipse = (value: string, length: number = 40): string => value.length <= length ? value: `${value.substring(0, length - 3)}...`;

    return {
        mapLanguageToColor,
        isEven,
        isOdd,
        trimText2Elipse
    }
};

export {
    useCommonHook
}