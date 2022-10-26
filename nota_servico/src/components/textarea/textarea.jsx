import React from 'react';
import '../textarea/textarea.css';

const TextArea = () => {
    return(
        <div id='textArea'>
            <textarea name="descriptionJob" id="descriptionJob" cols="30" rows="7" placeholder='Descreva o pedido do serviço'></textarea>
        </div>
    );
}

export default TextArea;