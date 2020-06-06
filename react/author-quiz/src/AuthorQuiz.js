import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import ClickCounter from './components/ClickCounter';
import Sum from './components/Sum'

function AuthorQuiz() {
  return (
      <>
          <Sum a={2} b={20} />
          <Sum a={'Not a number '} b={20} />
        <ClickCounter className="App" />
        <div className="App">
          Author Quiz
        </div>
      </>
  );
}

export default AuthorQuiz;
