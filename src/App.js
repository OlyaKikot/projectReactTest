import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

function App() {
  return (
    <div className="App">
 <p>test</p>
    </div>
  );
}

export default App;
