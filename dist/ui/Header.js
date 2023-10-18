import React from 'react';
import Theme from '../features/theme/Theme';
import styles from './Header.module.scss';
function Header() {
    return (React.createElement("header", { className: styles.header },
        React.createElement("img", { src: "./logo.svg", alt: "logo" }),
        React.createElement(Theme, null)));
}
export default Header;
