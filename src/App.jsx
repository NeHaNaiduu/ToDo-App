import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import {Provider} from 'react-redux'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <h1 className='heading'>Manage your Todos</h1>
      <TaskInput/>
      <TaskList/>
    </Provider>
  )
}

export default App
