import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import '../input/inputs.css';

const Inputs = (props) => {

    console.log(props);

    return(
        <div id='inputs'>
            <InputMask 
                className='inputField' 
                type={props.type} 
                placeholder={props.placeholder}
                mask={props.mask}
            />
        </div>
    );
}

export default Inputs;