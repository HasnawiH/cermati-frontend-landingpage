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
        
        <div style={{width:'100%', height:'80px', backgroundColor:'#e5e5e5', zIndex:2}}/>
        </>
      ) : ('')}
      <Header/>
      <Footer/>
    </>
	);
};

export default App;
