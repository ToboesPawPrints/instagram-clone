import { createContext } from 'react';

const FirebaseContext= createContext(null);


export default FirebaseContext;

//  provider ---- component 1 ------ (firebase)

// ---- component 2 ------

// consumer (uses firebase)---- component 3 ------

// ---- component 4 ------

// consumer (uses firebase) ---- component 5 ------

