export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
};

const visibilityFilter = (state = 'SHOW_ALL',action) => {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter
