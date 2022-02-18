export default (state = { snippets:[], user:[] }, action) => {   
    switch (action.type) {
        case 'CREATE':
            return {...state, snippet: action.payload};
        case 'FETCH':
            return {...state, message: action.payload};
        case 'FETCH_ALL':
        return {
            ...state,
            snippets : action.payload,
        };
        case 'HISTORY':
        return {
            ...state,
            user : action.payload,
        };
        case 'DELETE':
            return {...state, snippets: state.snippets.filter((snippet) => snippet._id !== action.payload)}; 

        case 'EDIT':
            return {...state, snippets: state.snippets.map((snippet) => snippet._id === action.payload._id ? action.payload : snippet)};
        default:
            return state;
    }
}