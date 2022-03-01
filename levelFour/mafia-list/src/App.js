import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header"
import Hitlist from "./components/Hitlist"

export default function App() {
  const [people, setPeople] = React.useState([])


  React.useEffect(function() {
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(res => res.json())
        .then(data => setPeople(data))
  }, [])

  return(
    <div>
      <Header />
      <Hitlist data={people}/>
    </div>
  )
}