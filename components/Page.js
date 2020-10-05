import React from 'react';
import Header from './Header';
import Meta from './Meta';

export default function Page({children}) {
    return (
        <div>
            <Meta />
            <Header />
            {children}
        </div>
    )
};