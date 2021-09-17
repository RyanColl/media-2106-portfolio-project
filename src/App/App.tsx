import './App.css';
import React, { useEffect, useState } from 'react';
import firebaseHandler from '../firebase/firebaseHandler';
import LandingPage from '../components/LandingPage/LandingPage';
import NavBar from '../components/NavBar/NavBar';
import '../components/Tooltips/Tooltips.css'
const {grabData, getImgUrl, getTools} = firebaseHandler;

export interface Tool {
  title: string;
  description: string;
  url: string;
  backgroundColor: string;
  sideColor: string;
}

const App = () => {
  const landingPageEnter = () => {

  }
  
const [tools, setTools] = useState([])
const [load, setLoad] = useState(true)
  const initializeApp = () => {
    const toolSet = (tools: any) => {
      let t: Tool[] = tools.data;
      //@ts-ignore
      setTools(t)
      setLoad(false)
    }
    let tools = getTools();
    tools.then((tools) => {
      toolSet(tools)
    })
  }
  
  useEffect(() => {
    initializeApp();
  }, []);
  console.log(tools)
  return (
    <div className="App">
        <nav>
          <NavBar />
        </nav>
        <header>
          <LandingPage
          tools={tools}
          load={load}
          buttonPress={landingPageEnter} />
        </header>
    </div>
  );
};

export default App;
