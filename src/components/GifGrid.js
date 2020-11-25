import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ( { categoria } ) => {
    const { imagenes, cargando } = useFetchGifs( categoria );

    return (
        <>  
            <h3 className="centrado animate__animated animate__jackInTheBox">{ categoria }</h3>

            <p className="centrado">{  cargando && 'Cargando...' }</p>

            <div className="card-grid">            
                {
                    imagenes.map( ( elem ) => {
                        return <GifGridItem key={ elem.id } { ...elem } />
                    } )
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default GifGrid;
