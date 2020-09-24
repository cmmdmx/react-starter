import React from "react";
import styles from "./app.module.scss";
import { Router } from "./routing/Router";

const App = () => {
	return (
		<div className={styles.app} id="app">
			<Router />
		</div>
	);
};

export { App };
