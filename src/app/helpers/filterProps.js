export const filterProps = (props, filter) => {
    if (!props) return {};
    if (!filter || Array.isArray(filter)) return props;

    return Object.keys(props)
        .filter(key => filter.includes(key))
        .reduce((obj, key) => { obj[key] = props[key]; return obj; }, {});
}
