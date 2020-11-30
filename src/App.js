import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Login from './Components/Login/Login'
import { useStateValue } from './StateProvider';
// import Widgets from './Components/Widgets/Widgets'

function App() {
  const [{ user }, dipatch] = useStateValue();
  console.log(user)
  return (
    <div className="App">
        {!user ? (
        <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              {/* <Widgets /> */}
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
