import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TaskPage } from './pages/TaskPage';
import {TaskFormPage} from './pages/TaskFormPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/tasks" element={<TaskPage/>}/>
    <Route path="/form" element={<TaskFormPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;