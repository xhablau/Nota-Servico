import React from 'react';
import '../select/select.css';

const Select = () => {
    return(
        <div id='selectDiv'>
            <select name="selectCel" id="selectCel">
                <option value="0">Selecione um Modelo</option>
            </select>
        </div>
    );
}

export default Select;