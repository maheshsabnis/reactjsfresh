import React, { useContext } from 'react';

// import the datacontext
import {DataContext} from './datacontext';

const DisplayComponent=()=>{
    // read data from the DataContext
    const data= useContext(DataContext);

    const d = data[Object.keys(0)]; // first parameter of value of provider
    const evt = data[Object.keys(1)]; // second param 
    return (
        <div className="container">
           <h2>In the Display Component</h2>
           {JSON.stringify(data)}
        </div>
    );
}

export default DisplayComponent;
