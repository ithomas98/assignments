import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './components/Context';

import Form from './components/Form';
import List from './components/List';

export default function App(){
  return(
    <div>
      <ContextProvider>
        <Form />
        <List />
      </ContextProvider>
    </div>
  )
}
