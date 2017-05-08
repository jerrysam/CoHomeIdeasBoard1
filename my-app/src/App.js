import React from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

// Understand bind(this)

class App extends React.Component {
  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "AIzaSyAxrFFxRmM-wlp_Bp62-MEEgJN0mx9epbE",
      authDomain: "reactfirebasecynicaldev.firebaseapp.com",
      databaseURL: "https://reactfirebasecynicaldev.firebaseio.com",
      // projectId: "reactfirebasecynicaldev",
      storageBucket: "reactfirebasecynicaldev.appspot.com",
      messagingSenderId: "435667821726"
    };
    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }
  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}


export default App;
