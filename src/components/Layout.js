import React from 'react';
import Header from './Header';
import '../App.css'

export default function Layout(props) {
  return (
    <div className='layout'>
       <Header/>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}
