import logo from "./logo.svg";
import "./App.css";
import {Header} from "./component/Header/Header";
import {Myname} from "./component/Myname/Myname";
import {AboutMe} from "./component/AboutMe/AboutMe";
import {MyProject} from "./component/MyProject/MyProject";
function App() {
  return (
    <div className="App">
      <Header />
      <Myname />
      <AboutMe />
      <MyProject />
    </div>
  );
}

export default App;
