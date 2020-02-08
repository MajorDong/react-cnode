import React from 'react';
import { Switch ,Route, Redirect } from "react-router-dom"
import Index from '../view/index/index'
import Detail from '../view/detail/detail'
import User from '../view/user/user'
import About from '../view/about/about'
import Book from '../view/book/book'

function RouteIndex(){
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/index/" />
      </Route>
      <Route path="/index" component={Index} />
      <Route path="/detail" component={Detail} />
      <Route path="/user" component={User} />
      <Route path="/about" component={About} />
      <Route path="/book" component={Book} />
    </Switch>
  )
}

export default RouteIndex