import React from "react";
import "./App.css";
import Aside from "./Aside";
import Content from "./Content";
/* import Icons from "./icons"; */
/* import { navIconList } from "./icons"; */
import Sidebar from "./Sidebar";

/* console.log(navIconList[0]); */
/* navIconList.map((icon: any) => return(
  <Icons name={icon.name} path={icon.path} />)
); */

function App() {
  return (
    <div className="twitter-app flex mx-auto max-w-7xl min-h-screen">
      <Sidebar />
      <Content />
      <Aside />
    </div>
  );
}

export default App;
