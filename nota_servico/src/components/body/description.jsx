import React, { useState } from 'react';
import '../../css/body.css';
import Inputs from '../input/inputs';
import TextArea from '../textarea/textarea';
import Select from '../select/select';

const Description = () => {

    return(
        <div id='description'>
            <Inputs placeholder='Nome' type='text' mask=''/>
            <Inputs placeholder='Telefone' type='text' mask='(99)99999-9999'/>
            <div id='selects'>
                <Select tipo='Celular'/>
                <Select tipo='Tablet'/>
                <Select tipo='Notebook'/>
            </div>
            <TextArea/>
        </div>
    );
}

export default Description;