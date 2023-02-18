import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from './Layout.module.css';

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout : React.FC<Props> = (props) => {
    return <React.Fragment>
        <MainNavigation />
        <main className={classes.mainArea}>{props.children}</main>
        <Footer />
    </React.Fragment>
}

export default Layout;