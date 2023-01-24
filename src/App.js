import logo from "./logo.svg";
import "./App.css";

import { Header } from "./component/Header/Header";
import Myname from "./component/Myname/Myname";
import { AboutMe } from "./component/AboutMe/AboutMe";
import { MyProject } from "./component/MyProject/MyProject";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function App() {
  const { list } = useSelector((state) => state.list);
  useEffect(() => {
    console.log(`Staet Updete ${list}`);
    if(list > 1){
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [list]);

  const ref = useRef(null);

  return (
    <div className="App">
      <Header />
      <Myname ref={ref} text="Panumas" />
      <AboutMe text="AboutMe" />
      <MyProject text="MyProject" />
    </div>
  );
}

export default App;
