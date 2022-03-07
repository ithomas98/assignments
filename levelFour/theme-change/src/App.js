import logo from './logo.svg';
import './App.css';
import { ThemeContextProvider} from './components/themeContext';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Foot from './components/Foot';

export default function App(){
  return(
    <div>
      <ThemeContextProvider>
        <Navbar />
        <Main />
        <Foot />
      </ThemeContextProvider>
    </div>
  )
}
