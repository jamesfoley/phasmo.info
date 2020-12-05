import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Journal from "./Journal"
import Overlay from "./Overlay"


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/journal/:id">
            <Journal/>
          </Route>
          <Route path="/overlay/:id">
            <Overlay/>
          </Route>
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      Phasmo Info
    </div>
  )
}