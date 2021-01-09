import React, { useState } from 'react';
import Modal from 'react-modal';
import './Style.css';

function Modal1() {

    const [modelIsOpen, setModalIsOpen] = useState(false)
    return(
        <div className="style">
            <button onClick={()=> setModalIsOpen(true) }>Open Modal</button>
            <Modal 
            isOpen={modelIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
            style={
                {
                    overlay: {
                        backgroundColor:'grey'
                    },
                    content: {
                        color:'orange'
                    }
                }                
            }
            >
                <h1>Modal Header</h1>
                <p>Modal body</p>
                <button onClick={()=>setModalIsOpen(false)}>Close</button>
            </Modal> 
        </div>
    );    
}

export default Modal1;

