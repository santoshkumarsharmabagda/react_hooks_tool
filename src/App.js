import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UseEffect from './Hooks/UseEffect';
import UseState from './Hooks/UseState';
import UseReducerHooks from './Hooks/UseReducerHooks';
import UseCallbackfu from './Hooks/UseCallbackfu';
import UseMemofu from './Hooks/UseMemofu';
import UseReffu from './Hooks/UseReffu';
import UseImperativeHandlefu from './Hooks/UseImperativeHandlefu';
import ReduxToolKit from './Hooks/ReduxToolKit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UseEffect/>}/>
        <Route path='/usest' element={<UseState/>}/>
        <Route path='/userd' element={<UseReducerHooks/>}/>
        <Route path='/UseCallbackfu' element={<UseCallbackfu/>}/>
        <Route path='/UseMemofu' element={<UseMemofu/>}/>
        <Route path='/UseReffu' element={<UseReffu/>}/>
        <Route path='/UseImperativeHandlefu' element={<UseImperativeHandlefu/>}/>
        <Route path='/ReduxToolKit' element={<ReduxToolKit/>}/>
        
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
