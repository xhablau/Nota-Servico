import React, { useState } from 'react';
import '../../css/body.css';
import Inputs from '../input/inputs';
import TextArea from '../textarea/textarea';
import Select from '../select/select';

const Description = () => {

    const celBrands = ['None','Samsung','Apple','Huawei','Xiaomi',
    'Google Pixel','Oppo','Motorola', 'Asus','Realme','Sony',
    ]
    
    const tabletBrands = ['None','Samsung','Apple','Xiaommi','Multilazer',
        'Positivo','Motorola','Lenovo','Philco', 'Microsoft','Nokia',
    ]

    const noteBookBrands = ['None','Samsung','Apple','ASUS','Dell',
        'Acer','HP','Lenovo','LG','Positivo','Multilazer',
    ]

    return(
        <div id='description'>
            <Inputs placeholder='Nome' type='text' mask=''/>
            <Inputs placeholder='Telefone' type='text' mask='(99)99999-9999'/>
            <div id='selects'>
                <Select tipo='Celular' brand={celBrands}/>
                <Select tipo='Tablet' brand={tabletBrands}/>
                <Select tipo='Notebook' brand={noteBookBrands}/>
            </div>
            <TextArea/>
        </div>
    );
}

export default Description;