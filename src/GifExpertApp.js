import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [ categorias, setCategorias ] = useState( [ 'Vikingos' ] );

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategorias={ setCategorias } />
            <hr/>

            <ol>
                {
                    categorias.map( ( elem ) => {
                        return <GifGrid key={ elem } categoria={ elem } />
                    } ) 
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
