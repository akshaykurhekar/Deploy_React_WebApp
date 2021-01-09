import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const CustomToast = ({closeToast}) =>{
    return(
        <div>
            Some Thing Went Wrong!
            <button onClick={ closeToast } >Close</button>
        </div>
    )   
}

toast.configure()
function App() {

    const notify = () =>{
        toast('Basic Notification',{position: toast.POSITION.TOP_LEFT })
        toast.error(<CustomToast/>,{
            position: toast.POSITION.TOP_RIGHT,
            autoClose:false
        })
        toast.info('Info Notification',{
            position: toast.POSITION.TOP_CENTER ,
            autoClose:8000
        })
        toast.warning('warning Notification',{
            position: toast.POSITION.BOTTOM_LEFT
         })
        toast.success('Success Notification',{
            position: toast.POSITION.BOTTOM_RIGHT
         })
        toast('Basic Notification',{position: toast.POSITION.BOTTOM_CENTER })
    }

  return (
    <div className="App">
        <h1>Hosted on Github.</h1>
      <h2>Tostify Notifications</h2>
      <button onClick={ notify}>Notify!</button>
    </div>
  );
}

export default App;
