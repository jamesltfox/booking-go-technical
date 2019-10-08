import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans: 600', 'Ubuntu:400,500', 'sans-serif']
  }
});

import "./styles.scss";


const app = document.getElementById("app");
ReactDOM.render(<App />, app);