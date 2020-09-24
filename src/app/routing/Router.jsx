import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export { Router };
