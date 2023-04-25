import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import SharedLayout from "./layout/SharedLayout.jsx";
import InfoProduct from "./components/InfoProduct.jsx";
import Pay from "./components/Pay.jsx";

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path='/infoproduct' element={<InfoProduct/>}></Route>
            <Route path='/pay' element={<Pay/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
