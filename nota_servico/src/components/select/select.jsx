import React, { useState } from 'react';
import '../select/select.css';

const Select = (props) => {

   const createSelectItems = () => {
        const items = [];
        for(let i=1; i < props.brand.length; i++){
            items.push(<option key={i} value={i}>{props.brand[i]}</option>)
        }
        return items;
   }


    return(
        <select name="selectCel" id="selectCel">
            <option value="0">Selecione um {props.tipo}</option>
            {createSelectItems()}
        </select>
    );
}

export default Select;