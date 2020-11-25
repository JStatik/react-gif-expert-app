const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=10&api_key=hGGR7G2E7Sa78gB2fGLC2L95qRIt2lN2`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( ( imagen ) => {
        return {
            id: imagen.id,
            title: imagen.title,
            url: imagen.images?.original.url
        }
    } )

    return gifs;
}

export default getGifs;
