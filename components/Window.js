import styles from '../styles/Window.module.css';
import Draggable from "react-draggable";

function Folder({ handleWindowClose, children  }) {
    return (<Draggable><div className={styles.shortpost}>
    <div className={styles.shortpostheader}>Some Header<button className={styles.closebutton} onClick={handleWindowClose}>X</button></div>
    <div className={styles.shortpostcontent}>
    
    <p> {children}</p>
    </div>
    </div></Draggable>)
}

export default Folder;


// import ReactDOM from 'react-dom';
// import { useEffect } from 'react';

// function Modal({ onClose, children, actionBar }) {

//     useEffect(() => {
//         document.body.classList.add('overflow-hidden');

//         return () => {
//             document.body.classList.remove('overflow-hidden');
//         };
//     }, []);

//     return ReactDOM.createPortal(
//     <div><div 
//         onClick={onClose}
//     className="fixed inset-0 bg-gray-300 opacity-80">modal!</div>
//     <div className="fixed inset-40 p-10 bg-white">
//         <div clasName="flex flex-col justify-between h-full">
//         {children}
//         </div>
//         <div className="flex justify-end">{actionBar}</div>
        
//     </div></div>,
//     document.querySelector('.modal-container')
//    );
// }

// export default Modal;