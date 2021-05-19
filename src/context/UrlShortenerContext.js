import React, { createContext, useContext, useMemo, useReducer } from 'react';
import reducers from '../reducers';

const UrlShortenerContext = createContext();

export const UrlShortenerContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, {
        longUrl: '',
        shortUrl: '',
    });

    const contextClearallVal = useMemo(() => ({ ...state, dispatch }), [state]);

    return (
        <UrlShortenerContext.Provider value={contextClearallVal}>
            {children}
        </UrlShortenerContext.Provider>
    );
};

export const useUrlShortenerContext = () => useContext(UrlShortenerContext);
