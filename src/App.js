import React, { useState } from "react";
import Notification from "./components/Notification/notification";
import Header from "./components/Header/header";
import Highlights from "./components/Highlights/highlights";
import Footer from "./components/Footer/footer";
import Newsletter from "./components/Newsletter/newsletter";

//CSS
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(true);

  const handleHidden = value => {
    setVisible(value);
  };

  const handleClose = value => {
    setOpen(value);
  };

  return (
    <>
      {visible ? (
        <>
          <Notification visibleChange={value => handleHidden(value)} />
          <div className="box1" />
        </>
      ) : (
        ""
      )}
      <Header />
      <Highlights />
      <Footer />
      {open ? <Newsletter closeChange={value => handleClose(value)} /> : ""}
    </>
  );
};

export default App;
