import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Category from './components/Category';
import Filter from "./components/Filter/Filter"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filter />
      {/* <Category/> */}
    </div>
  );
}

export default App;
