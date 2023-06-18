import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalVisible] = useState(false);

  function showModalHandler() {
    setModalVisible(true)
  }
  function hideModalHandler() {
    setModalVisible(false)
  }
  return  (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
       <main>
        <PostsList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler}/>
      </main>
    </>

  );
}

export default App;

