import Greet from './components/Greet';
import ReactPlayer from 'react-player';
import { Hello } from './components/Hello';
import './App.css';
import FunctionClick from './components/FunctionClick';
import HookCounter from './components/HookCounter';
import HookCouterTwo from './components/HookCouterTwo';
import HookCounterThree from './components/HookCounterThree';
import DataFetching from './components/DataFetching';
import DataFetching2 from './components/DataFetching2';
import DataFetching3 from './components/DataFetching3';
import FetchingDogs from './components/FetchingDogs';
import FetchByFetch from './components/FetchByFetch';
import PostFetch from './components/PostFetch';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman" >
        <button>Action!</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder woman" /> */}
      {/* <Hello/> */}
      {/* <FunctionClick/> */}
      {/* <HookCounter/> */}
      {/* <HookCouterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <ReactPlayer controls width="480px" height="240px" url="https://www.youtube.com/watch?v=3AUsZwck0_c" /> */}
      {/* <HookCounter/> */}
      {/* <DataFetching/> */}
      {/* <DataFetching2/> */}
      {/* <DataFetching3/> */}
      {/* <FetchingDogs/> */}
      {/* <FetchByFetch/> */}
      {/* <PostFetch/> */}
      <SearchFilter/>
      
    </div>
  );
}

export default App;
