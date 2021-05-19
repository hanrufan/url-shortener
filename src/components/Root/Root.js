import React from 'react';
import { UrlShortenerContextProvider } from '../../context/UrlShortenerContext';
import Content from '../Content';
import NavBar from '../NavBar';

const Root = () => (
    <UrlShortenerContextProvider>
        <NavBar title='Url Shortener' />
        <Content />
    </UrlShortenerContextProvider>
);

export default Root;
