import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import '../input/inputs.css';

const Inputs = (props) => {

    return(
        <div id='inputs'>
            <InputMask 
                className='inputField' 
                type={props.type} 
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Inputs;