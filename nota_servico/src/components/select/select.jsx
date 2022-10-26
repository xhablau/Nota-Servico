import React from 'react';
import '../select/select.css';

const Select = (props) => {
    return(
        <select name="selectCel" id="selectCel">
            <option value="0">Selecione um {props.tipo}</option>
        </select>
    );
}

export default Select;