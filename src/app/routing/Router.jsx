import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import pages from "../pages/";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					{Object.entries(pages).map(([key, value], i) => {
						const Comp = value;

						return (
							<Route exact path={key}>
								<Comp />
							</Route>
						);
					})}
					<Route>
						<Redirect to="/404" />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export { Router };
