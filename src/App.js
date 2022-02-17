import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_API_KEY;
  const pageSize = 15;

  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
          waitingTime={300}
        />
        <Navbar />
        <Switch>
          <Route path="/business">
            <News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} category="business" country="in" />
          </Route>
          <Route path="/entertainment">
            <News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" country="in" />
          </Route>
          <Route path="/health">
            <News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} category="health" country="in" />
          </Route>
          <Route path="/science">
            <News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} category="science" country="in" />
          </Route>
          <Route path="/sports">
            <News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" country="in" />
          </Route>
          <Route path="/technology">
            <News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" country="in" />
          </Route>
          <Route path="/">
            <News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} category="general" country="in" />
          </Route>
        </Switch>
      </Router>
    </>
  );

}
