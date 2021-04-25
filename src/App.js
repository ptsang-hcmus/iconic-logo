import React, { useState } from 'react';
import download from 'downloadjs';
import { toPng, toSvg } from 'html-to-image';

import './App.css';

function App() {
  const [firstWord, setFirstWord] = useState("Git");
  const [secondWord, setSecondWord] = useState("hub");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div className="d-flex App mt-20">
      <div className="d-grid grid-input">
        <input
          className="ff input-font-size"
          value={firstWord} onChange={(e) => {
            setFirstWord(e.target.value);
          }} />
        <input
          className="ff input-font-size"
          value={secondWord} onChange={(e) => {
            setSecondWord(e.target.value);
          }} />
        <div style={{ justifySelf: "right" }}>
          <label className="ff"><b>Dark theme</b></label>
        </div>
        <div style={{ justifySelf: "left" }}>
          <label className="switch">
            <input value={isDarkTheme} type="checkbox" onChange={(e) => {
              setIsDarkTheme(e.target.checked);
            }} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="mt-20 text-align-center">
        <div id="logo" style={{
          backgroundColor: isDarkTheme ? "black" : "aqua",
          display: "inline-block",
          padding: 10,
        }}>
          <p className="logo-text">
            {firstWord && <span style={{
              color: isDarkTheme ? "white" : "black",
              paddingRight: secondWord ? 10 : 0,
            }}>{firstWord}</span>}
            {secondWord && <span className="second-word">{secondWord}</span>}
          </p>
        </div>
      </div>
      <div className="export-btn-container d-flex mt-20 align-items-center jutify-content-center">
        <div>
          <button className="ff btn primary" onClick={() => {
            toPng(document.getElementById('logo'))
              .then(function (dataUrl) {
                download(dataUrl, 'logo.png');
              });
          }}>Export png</button>
        </div>
        <div>
          <button className="ff btn primary" onClick={() => {
            toSvg(document.getElementById('logo'))
              .then(function (dataUrl) {
                download(dataUrl, 'logo.svg');
              });
          }}>Export svg</button>
        </div>
      </div>
    </div>
  );
}

export default App;
