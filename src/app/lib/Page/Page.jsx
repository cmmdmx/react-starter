import React from "react";
import styles from "./page.module.scss";
import { resolveClassNames } from "../../helpers";

const Page = (props) => {
	return (
		<div className={resolveClassNames(styles.page, props.className)}>
			{props.children}
		</div>
	);
};

const Content = (props) => {
	return (
		<article className={resolveClassNames(styles.content, props.className)}>
			{props.children}
		</article>
	);
};

Page.Content = Content;

export { Page };
