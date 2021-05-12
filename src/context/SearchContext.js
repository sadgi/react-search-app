import React, { createContext, useContext, useReducer } from 'react';

const SearchStateContext = createContext();

const searchStateReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_IMAGES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_IMAGES_SUCCESS":
            return {
                ...state,
                loading: false,
                images: action.payload
            };
        case "SEARCH_IMAGES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};

const initialState = {
    loading: false,
    images: [],
    errorMessage: null
};

export function SearchStateProvider(props) {
    const [state, dispatch] = useReducer(searchStateReducer, initialState)
    const value = { state, dispatch };
    return <SearchStateContext.Provider value={value} {...props} />;
}

export function useSearchState() {
    const context = useContext(SearchStateContext);
    if (!context) {
        throw new Error('useSearchState must be within a SearchStateProvider')
    }
    return context;
}
