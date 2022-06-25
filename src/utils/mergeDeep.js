
const isObject = (obj) => typeof obj === 'object';
const removeDuplicate = (element, index, array) =>
    array.indexOf(element) === index;

const mergeObjects = (obj, current) => {
    const mergedObj = Object.entries(current).map(([key, oVal]) => {
        const pVal = obj[key];
        const _isArray = Array.isArray(pVal) && Array.isArray(oVal);
        const _isObject = isObject(pVal) && isObject(oVal);

        const value =
            (_isArray && [...pVal, ...oVal].filter(removeDuplicate)) ||
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            (_isObject && mergeDeep(pVal, oVal)) ||
            oVal;

        return [key, value];
    });
    return { ...obj, ...Object.fromEntries(mergedObj) };
};

const mergeDeep = (...objects) =>
    objects.reduce(mergeObjects, {});

export default mergeDeep;
