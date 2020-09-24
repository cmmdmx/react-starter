import React from "react";
import styles from "./page.module.scss";

const Page = (props) => {
	return <div className={styles.page}>{props.children}</div>;
};

const Content = (props) => {
	return <article className={styles.content}>{props.children}</article>;
};

Page.Content = Content;

export { Page };
