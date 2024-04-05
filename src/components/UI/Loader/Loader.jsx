import React from 'react';
import cl from './Loader.module.css';

const Loader = (marginTop="50", height = "100px") => {
    return (
        <div className={cl.loader} style={{marginTop: marginTop, height: height}}></div>
    );
};

export default Loader;