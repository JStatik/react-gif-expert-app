import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'
import useFetchGifs from '../../hooks/useFetchGifs';

describe( 'Pruebas en el customHook useFetchGifs', () => {
    test( 'Debe retornar el estado inicial del hook useState', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Naruto Shippuden' ) );
        const { imagenes, cargando } = result.current;

        await waitForNextUpdate();

        expect( [] ).toEqual( imagenes );
        expect( true ).toBe( cargando );
    } );

    test( 'Debe retornar las 10 imagenes y el cargando en false cuando cambie el estado del hook useState', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Naruto Shippuden' ) );
        await waitForNextUpdate();

        const { imagenes, cargando } = result.current;

        expect( 10 ).toBe( imagenes.length );
        expect( false ).toBe( cargando );
    } );
} );
