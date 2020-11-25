import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategorias } ) => {
    const [ valorInput, setValorInput ] = useState( '' );

    const handleInputChange = ( event ) => {
        setValorInput( event.target.value );
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if( valorInput.trim() ) setCategorias( ( categorias ) => [ valorInput, ...categorias ] ); 
        setValorInput( '' );
    };

    return (       
        <form onSubmit={ handleSubmit }>
            <span>Buscar categoria:</span>
            <input type="text" value={ valorInput } onChange={ handleInputChange }/>
        </form>
    )
};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;
