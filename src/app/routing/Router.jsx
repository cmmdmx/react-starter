import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import pages from "../pages/";
import { Header } from "../compositions/";
import routes from "./routes";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path={routes[404]} />
					<Route>
						<Header />
					</Route>
				</Switch>
				<Switch>
					{Object.entries(pages).map(([key, value], i) => {
						const Comp = value.component;

						return (
							<Route exact={value.isExact} path={key} key={key}>
								<Comp />
							</Route>
						);
					})}
					<Route>
						<Redirect to={routes[404]} />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export { Router };
