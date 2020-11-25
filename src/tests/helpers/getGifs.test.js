import '@testing-library/jest-dom';
import getGifs from '../../helpers/getGifs';

describe( 'Pruebas en el helper getGifs', () => {
    test( 'Debe traer 10 imagenes', async() => {
        const gifs = await getGifs( 'Vikingos' );

        expect( 10 ).toBe( gifs.length );
    } );

    test( 'No debe traer ninguna imagen', async() => {
        const gifs = await getGifs( '' );

        expect( 0 ).toBe( gifs.length );
    } );
} );
