import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = ( categoria ) => {
    const [ informacion, setInformacion ] = useState( { imagenes: [], cargando: true } );

    useEffect( () => {
        getGifs( categoria ).then( ( gifs ) => setInformacion( { imagenes: gifs, cargando: false } ) );        
    }, [ categoria ] );

    return informacion;
};

export default useFetchGifs;
