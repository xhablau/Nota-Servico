import React, { useState } from 'react';
import '../../css/body.css';
import Inputs from '../input/inputs';
import TextArea from '../textarea/textarea';
import Select from '../select/select';

const Description = () => {

    return(
        <div id='description'>
            <Inputs/>
            <Inputs/>
            <Select/>
            <TextArea/>
        </div>
    );
}

export default Description;