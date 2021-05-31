import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App m-5" style={{borderRadius:'10px'}}>
      <h1>My TO-DO List</h1>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
