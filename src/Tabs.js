import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container" style={{position: "absolute", top: "100%"}}>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Web
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          App
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <div className="frame1">
                <h3>foodecipe</h3>
                <p>You write the ingredients, and it generates the recipes</p>
                
            <br/>
            <br/>
            </div>
            <div className="frame2">
                <h3>CRM</h3>
                <p>Customer Relation Management <a style={{fontSize:"10px"}} href="https://www.figma.com/proto/RMV1wU94e6dSlUbxe5TLys/Design-01?page-id=0%3A1&node-id=3%3A3&viewport=924%2C756%2C0.22&scaling=scale-down-width&starting-point-node-id=3%3A3">View Design</a></p>
                <img className="img1" src={require('./img/img.png')} alt="img" />
            <br/>
            <br/>
            </div>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className="frame1">
                <h3></h3>
                <p></p>
            <br/>
            <br/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;