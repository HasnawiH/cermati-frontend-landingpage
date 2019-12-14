import React, {useState, useEfect} from 'react';
import Notification from './components/Notification/notification';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

//CSS
import './App.css';

const App = () => {
  const [visible, setVisible] = useState(true)
  const handleHidden = value =>{
    setVisible(value)
  }
	return ( 
    <>
      { visible ? (
        <>
        <Notification visibleChange={(value)=> handleHidden(value) }/>
        <div className='box1'/>
        </>
      ) : ('')}
      <Header/>
      <Footer/>
    </>
	);
};

export default App;
