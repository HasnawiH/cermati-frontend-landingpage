import React, {useState, useEfect} from 'react';
import Notification from './components/Notification/notification';
import Header from './components/Header/header';
import Highlights  from './components/Highlights/highlights'
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
      <Highlights/>
      <Footer/>
    </>
	);
};

export default App;
