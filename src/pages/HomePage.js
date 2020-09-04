import React, { useState } from "react";
import "./../styles.css";

const HomePage = (props) => {
  const [myHookContent, setMyHookContent] = useState("yay hooks");
  return (
    <div className="App">
      <h1>Hello {props.Label}</h1>
      <h2>Start editing to see some magic happen!</h2>
      {myHookContent}
      <br />
      <input
        placeholder={"change hook content"}
        onChange={(e) => setMyHookContent(e.target.value)}
      />
    </div>
  );
};

export default HomePage;
