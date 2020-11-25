import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe( 'Pruebas en el componente AddCategory', () => {
    const setCategorias = jest.fn();
    let wrapper = shallow( <AddCategory setCategorias={ setCategorias } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategorias={ setCategorias } /> );
    } );

    test( 'Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe cambiar el contenido del input', () => {
        const input = wrapper.find( 'input' );
        const valorInput = 'Naruto Shippuden';

        input.simulate( 'change', { 
            target: { 
                value: valorInput 
            } 
        } );

        const getValorInput = wrapper.find( 'input' ).prop( 'value' );

        expect( valorInput ).toBe( getValorInput );
    } );

    test( 'NO debe ejecutar la funcion setCategorias', () => {
        const form = wrapper.find( 'form' );
        
        form.simulate( 'submit', {
            preventDefault(){}
        } );

        expect( setCategorias ).not.toHaveBeenCalled();
    } );

    test( 'Debe ejecutar la funcion setCategorias y el input debe estar vacio', () => {
        const input = wrapper.find( 'input' );
        const valorInput = 'Naruto Shippuden';
        input.simulate( 'change', { target: { value: valorInput } } );

        const form = wrapper.find( 'form' );
        form.simulate( 'submit', { preventDefault(){} } );        

        expect( setCategorias ).toHaveBeenCalledTimes( 1 );
        expect( setCategorias ).toHaveBeenCalledWith( expect.any( Function ) );

        const getValorInput = wrapper.find( 'input' ).prop( 'value' );
        
        expect( '' ).toBe( getValorInput );
    } );
} );
