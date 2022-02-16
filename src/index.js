import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')
);

//client side rendered app: built on react(create-react-app, or cra)
  // => database will be Firebase
  // => react-loading-skeleton
  //using tailwind css

//architecture and folder structure
  //src
    // -> will have components, constants, context, helpers, lib(firebase will live in here), services (firebase functions wil be in here)
      // -> components
      // -> constants
      // -> context
      // -> helpers
      // -> lib
      // -> services
      // -> styles(tailwind folder)
        // -> app
        // -> tailwind
