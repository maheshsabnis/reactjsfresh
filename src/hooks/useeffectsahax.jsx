import * as React from 'react';

import {useEffect, useState} from 'react';

import HttpService from './../services/httpservice.js';
import DataGridComponent from '../classcomponents/DataGridComponent.jsx';

const UseEffectForAjaxComponent =()=>{
  const serv = new HttpService();
  const [students, getStudentsData] = useState([]);
  // replacement of componentDidMount
  useEffect(()=>{
    serv.getStudents().then((response)=> {
        console.log(`Data Receiced ${response.data.data}`);
        // the method that is used 
        getStudentsData(response.data.data);
    });
  },[]); //<-- [] parameter is dependency for useEffect() to complete its execution
  return (
      <div className="container">
          {
              <span>{JSON.stringify(students)}</span>
          }
      </div>
  )
}

export default UseEffectForAjaxComponent;