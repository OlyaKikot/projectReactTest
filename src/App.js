import Enzyme from 'enzyme';
import { Route, Routes } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainPage from "./containers/MainPage/MainPage"
import SecondPage from "./containers/MainPage/MainPage"

Enzyme.configure({ adapter: new Adapter() });

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
