import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe( 'Pruebas en el componente GifExpertApp', () => {
    let wrapper = shallow( <GifExpertApp /> );

    beforeEach( () => {
        wrapper = shallow( <GifExpertApp /> );
    } );

    test( 'Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe tener un componente GifGrid', () => {
        expect( 1 ).toBe( wrapper.find( 'GifGrid' ).length );
    } );
} );
