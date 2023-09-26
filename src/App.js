import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import avatar from './img/profile.png';
import PostsList from './components/PostsList';
import { useEffect, useState } from "react";
import { getPosts } from './services/posts-services';

let counter = 0;
const initialState = [];

function App() {
  const [seccion, setSeccion] = useState("posts");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    console.log("se monta el componente use Effect");
    getPosts().then((posts) => setPosts(posts));
  }, []);

  console.log("render array" + posts);

  const onProfileClick = () => {
    setSeccion("profile");
  };

  const onLogoClick = () => {
    setSeccion("posts");
  };

  const onSearch = (text) => {
    setSearch(text);
    console.log("entra a Search" + search);
  };

  console.log("Impresión del search " + search);

  return (
    <>
      <NavBar onProfileClick={onProfileClick} onLogoClick={onLogoClick} />
      <SearchBar search={search} onSearch={onSearch} />
      {seccion === "profile"
        ? <Profile avatar={avatar} username="Pedro" bio="ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
        : null
      }
      {
        posts === initialState
          ? "Load..."
          : null
      }
      {
        seccion === "posts"
          ? <PostsList posts={posts} search={search} />
          : null
      }
    </>
  );
}

export default App;
