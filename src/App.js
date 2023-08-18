import './App.css';
import Greeting from './component/Greeting';
import Mybutton from './component/Mybutton';
import TaskList from './component/TaskList';
import TicTac from './components/TicTac';
import TicTacToe from './components/TicTacTeo';
import TicTacToe1 from './components/TicTacToe1';
//import ChildComponent from './component/ParentComponent';
function App() {
  return (
    <div className="App">
    {/*
    <Greeting />
     <Mybutton/>
     <TaskList/>
     <TicTac/>
    */}  
    <TicTacToe1/>
    </div>
  );
}

export default App;
