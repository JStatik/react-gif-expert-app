import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe( 'Pruebas en el componente GifGridItem', () => {
    let wrapper = shallow( <GifGridItem id="id" title="title" url="url" /> );

    beforeEach( () => {
        wrapper = shallow( <GifGridItem id="id" title="title" url="url" /> );
    } );

    test( 'Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'El div contenedor debe tener la clase animate__fadeInLeftBig', () => {
        const claseDiv = wrapper.find( 'div' ).hasClass( 'animate__fadeInLeftBig' );

        expect( true ).toBe( claseDiv );
    } );

    test( 'Debe tener un parrafo con el titulo enviado por props', () => {
        const parrafo = wrapper.find( 'p' ).text().trim();

        expect( 'title' ).toBe( parrafo );
    } );

    test( 'Debe tener una imagen con la url de la imagen y el titulo enviado por props', () => {
        const imagen = wrapper.find( 'img' ).props();
        const { src, alt } = imagen;

        expect( 'url' ).toBe( src );
        expect( 'title' ).toBe( alt );
    } );
} );
