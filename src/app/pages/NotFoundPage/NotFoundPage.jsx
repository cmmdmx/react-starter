import React from "react";
import styles from "./notFound.module.scss";
import { Page } from "../../lib";

const NotFoundPage = () => {
	return (
		<Page className={styles.notFound}>
			<h1>404</h1>
			<span>This route does not exist.</span>
		</Page>
	);
};

export { NotFoundPage };
