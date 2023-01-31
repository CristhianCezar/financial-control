import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import Form from './components/form/Form';

export default function App() {
  return (
    <div className="app">
      <Header/>
      <Resume/>
      <Form/>
    </div>
  )
}