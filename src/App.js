import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './components/create';
import Read from "./components/read";
import Update from "./components/update";
import CreateUser from "./components/createUser";
import ShowUsers from "./components/showUsers";
import UpdateUser from "./components/updateUser";
import React, { createContext, useState } from 'react';


export const DatosContext = createContext();
function App() {

  const [datos, setDatos] = useState();

  const hijoAPadre = (data) => {
    setDatos(data);
  }

  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <DatosContext.Provider value={datos}>
            <Routes>
              <Route exact path="/create" element={<Create />} />
              <Route exact path="/read" element={<Read />} />
              <Route exact path="/update" element={<Update />} />
              <Route exact path="/showusers" element={<ShowUsers hijoAPadre={hijoAPadre} />} />
              <Route exact path="/createuser" element={<CreateUser />} />
              <Route exact path="/updateuser" element={<UpdateUser props={datos} />} />
            </Routes>
          </DatosContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;