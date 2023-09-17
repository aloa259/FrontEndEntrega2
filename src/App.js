import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import avatar from './img/profile.png';
import PostsList from './components/PostsList';
import { useState } from "react";

let counter = 0;

function App() { 
  const [tick, setTick] = useState(0);
 
  function onProfileClick() {
    console.log("es boton de profile");
    <Profile avatar={avatar} username="Pedro" bio="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>

  };

  function onLogoclick(){
    console.log("es boton de logo");
  }

  const handleClick = () => {
    counter += 1;
    setTick(tick + 1);
  }

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <PostsList>safdf</PostsList>
    </>
  );
}

export default App;
