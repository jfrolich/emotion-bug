/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
import logo from "./logo.svg";
import "./App.css";

const Box = styled.div`
  color: blue;
  border: 2px solid blue;
  ${() => css`
    background-color: red;
  `};
  padding: 30px;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Box>Test</Box>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
