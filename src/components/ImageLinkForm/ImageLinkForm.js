import React from 'react';
import './ImageLinkForm.css';

const ImagelinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='f3 white'>
                {'This Magic Brain Will Detect Faces In Your Pictures. Give It A Try!'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div> 
    );
}

export default ImagelinkForm;