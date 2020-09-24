import React from "react";
import styles from "./header.module.scss";
import { Link, useRouteMatch } from "react-router-dom";
import routes from "../../routing/routes";
import { resolveClassNames } from "../../helpers";

const MainLink = (props) => {
	const match = useRouteMatch(props.href);

	return (
		<Link
			className={resolveClassNames(
				styles.mainLink,
				match !== null && match.isExact && styles.currentMainLink
			)}
			to={props.href}
		>
			{props.content}
		</Link>
	);
};

const Header = () => {
	return (
		<div className={styles.header}>
			<header>
				<MainLink content="Home" href={routes.home} />
				<MainLink content="About" href={routes.about} />
				<MainLink content="404" href={routes[404]} />
			</header>
		</div>
	);
};

export { Header };
