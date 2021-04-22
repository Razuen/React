import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Login/Home";
import Login from "./screens/Login/Login";
export const User = React.createContext();
function App() {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    let res = await Login();
    setuserData(res);
  };

  return (
    <BrowserRouter>
      <Route>
        {userData && (
          <User.Provider value={userData}>
            <Home />
          </User.Provider>
        )}
      </Route>
    </BrowserRouter>
  );
}

export default App;
