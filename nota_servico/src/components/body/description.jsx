import React, { useState } from 'react';
import '../../css/body.css';
import Inputs from '../input/inputs';
import TextArea from '../textarea/textarea';
import Select from '../select/select';

const Description = () => {

    return(
        <div id='description'>
            <Inputs placeholder='Nome' type='text' />
            <Inputs placeholder='Telefone' type='number' />
            <Select/>
            <TextArea/>
        </div>
    );
}

export default Description;