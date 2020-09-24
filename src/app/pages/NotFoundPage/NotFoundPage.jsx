import React from "react";
import styles from "./notFound.module.scss";

const NotFoundPage = () => {
	return (
		<div className={styles.notFound}>
			<h1>404</h1>
			<span>This route does not exist.</span>
		</div>
	);
};

export { NotFoundPage };
