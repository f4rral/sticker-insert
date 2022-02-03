import React, { useState, useEffect } from 'react';
import apiData from './api/API';
import { Sticker, Form } from './сomponents';

import './App.css';

let defaultState = {
  insert: '',
  validInsert: '',
  grade: '',
  listGrades: [],
  quantity: 1, 
  orderNumber: '',
  year: new Date().getFullYear(),

  dataFeed: {},
  dataSpeed: {},

  fuseSearchInsert: []
}

function App() {
  const [stickerState, setStickerState] = useState(defaultState);

  useEffect(() => {
    dataProcessing(stickerState);
  },
  [
    stickerState.insert,
    stickerState.quantity,
    stickerState.grade,
    stickerState.orderNumber
  ]);

  function onChangeForm(e) {
    setStickerState({
      ...stickerState,
      [e.target.name]: e.target.value || ''
    });
  }

  function choiceFuseSearchInsert(insert) {
    setStickerState({
      ...stickerState,
      insert: insert
    });
  }

  function dataProcessing(data) {
    let grade = data.grade;
    let validInsert = apiData.getValidInsert(data.insert || '');
    let fuseSearchInsert = [];

    if (validInsert.listGrades.length === 0) {
      grade = '';
    }

    if (validInsert.insert === '') {
      fuseSearchInsert = apiData.fuseSearchInsert(data.insert);
    } else {
      fuseSearchInsert = [];
    }

    let dataFeed = apiData.getDataFeed(validInsert.insert) || {};
    let dataSpeed = apiData.getDataSpeed(grade) || {};

    setStickerState({
      ...stickerState,
      validInsert: validInsert.insert,
      listGrades: validInsert.listGrades,
      grade: grade,
      dataFeed: apiData.getValidFeed(dataSpeed, dataFeed),
      dataSpeed: apiData.getDataSpeed(grade) || {},
      fuseSearchInsert: fuseSearchInsert
    });
  }

  return (
    <div className="App">
      <Sticker 
        data={stickerState}
      />



      <Form
        data={stickerState}
        onChangeForm={onChangeForm}
        choiceFuseSearchInsert = {choiceFuseSearchInsert}
      />

      <div className='buttons-wrapper'>
        <button 
          className='button button-print'
          onClick={() => {window.print()}}
        >
          Печать
        </button>
      </div>
    </div>
  );
}

export default App;
