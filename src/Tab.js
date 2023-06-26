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
          Product Research
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          QA
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Project Management
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <div className="frame1">
                <h3 style={{marginBottom:"-5%"}}>Fulfillment as a Service</h3>
                <iframe 
                title="FAAS"
                style={{marginBottom:"-5%"}}
                width="800" height="450" 
                src="https://docs.google.com/document/d/e/2PACX-1vTpmkRAx27JqvJSYj-XJJAvDon-8cIwO-9uOPQoTzgz5iSntI3spwcq1jXRiX3He-SRrc3y_6Skkyoo/pub?embedded=true" 
                allowFullScreen/>
            <br/>
            <br/>
            </div>
            <div className="frame2">
                <h3 style={{marginBottom:"-5%"}}>Waiterlist Restaurant</h3>
                <iframe 
                title="ASM"
                width="800" height="450" 
                src="https://docs.google.com/document/d/e/2PACX-1vQDn5q2NbP-ZuE6X8F6YkQLPXJ7kAvSnjLyTJaAhVpBO199IAEhI6A9zCzNBGTD9afohlgkwl9QdVqN/pub?embedded=true" 
                allowFullScreen/>
            <br/>
            <br/>
            </div>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className="frame1">
                <h3 style={{marginBottom:"-5%"}}>Test Case Document</h3>
                <iframe 
                title="Brand Protection Test Cases"
                style={{marginLeft:"-5%"}}
                width="900" height="450"
                src="https://docs.google.com/document/d/e/2PACX-1vRXOyIWaF5JdbQx3swKkmYfe_ITArZWyG6SgJRX9HK_VkHTieUsfpbiu2CDY6jT-yvvatcLNX4BieY0/pub?embedded=true"></iframe>
            <br/>
            <br/>
            </div>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <div className="frame1">
            <h3 style={{marginBottom:"-5%",marginLeft:"-5%" }}>Project Management Plan</h3>
                <iframe 
                title="Brand Protection Project Management Plan"
                style={{marginLeft:"-5%"}}
                width="900" height="450"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSOn3v50QlbEDXSe6T4VIN-qZ67K37RGpxXJ5OMMprA1VgLzENlEVUG98wNiOL3MbBEmsSn1IvekakH/pubhtml?widget=true&amp;headers=false"></iframe>
                <br/>
                <br/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;