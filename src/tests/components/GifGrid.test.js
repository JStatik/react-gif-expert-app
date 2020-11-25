import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock( '../../hooks/useFetchGifs' );

describe( 'Pruebas en el componente GifGrid', () => {    
    test( 'Debe mostrar el componente sin imagen alguna y con el mensaje "Cargando..."', () => {
        useFetchGifs.mockReturnValue( {
            imagenes: [],
            cargando: true
        } );

        const wrapper = shallow( <GifGrid categoria="Naruto Shippuden" /> );

        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe mostrar una imagen en el componente correctamente y ocultar el mensaje "Cargando..."; adicionalmente verificamos que el parrafo este vacio, que el Componente GifGridItem exista y que la cantidad de componentes GifGridItem sea los mismos que los gifs obtenidos por useFetchGifs', () => {
        const gifs = [ {
            id: 'abc123',
            url: 'https://localhost/naruto+shippuden/gif',
            title: 'Naruto'
        } ];

        useFetchGifs.mockReturnValue( {
            imagenes: gifs,
            cargando: false
        } );

        const wrapper = shallow( <GifGrid categoria="Naruto Shippuden" /> );

        expect( wrapper ).toMatchSnapshot();

        expect( '' ).toBe( wrapper.find( 'p' ).text() );
        expect( true ).toBe( wrapper.find( 'GifGridItem' ).exists() );
        expect( gifs.length ).toBe( wrapper.find( 'GifGridItem' ).length );
    } );
} );
