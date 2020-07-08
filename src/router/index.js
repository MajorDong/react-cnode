import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"

const Index = lazy(() => import('../view/index/index'))
const Detail = lazy(() => import('../view/detail/detail'))
const User = lazy(() => import('../view/user/user'))
const About = lazy(() => import('../view/about/about'))
const Book = lazy(() => import('../view/book/book'))

function RouteIndex() {
	return (
		<Switch>
			<Suspense fallback={<div>Loading...</div>}>
				<Route path="/" exact>
					<Redirect to="/index/all&page=1" />
				</Route>
				<Route path="/index/:id&:page" exact component={Index} />
				<Route path="/detail/:id" component={Detail} />
				<Route path="/user/:loginname" component={User} />
				<Route path="/about" component={About} />
				<Route path="/book" component={Book} />
			</Suspense>
		</Switch>
	)
}

export default RouteIndex