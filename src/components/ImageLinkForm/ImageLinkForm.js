import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='center'>
            <div className='w-70'>
                <p className='f3'>
                    {'Link your picture below. SmartBrain will detect the face!'}
                </p>
                <div className='form center pa4 br3 shadow-5'>
                    <div className='center'>
                        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                        <button className='w-30 grow f4 link ph3 pv2 dib black bg-white'  onClick={onButtonSubmit}>Detect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;