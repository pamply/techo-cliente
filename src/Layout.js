import React from 'react';
import { Header } from './Header';
import { Main } from './view/Main';
import { Description } from './view/Description';
import { Contact } from './view/Contact';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const styles = {
    container: {
        paddingLeft: '40px',
        paddingRight: '40px',
    },
    content: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export const Layout = () => (
    <div style={styles.container}>
        <Header />
        <div style={styles.content}>
            <Router>
                <Switch>
                    <Route path="/contacto" component={Contact} />
                    <Route path="/description" component={Description} />
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
        </div>
        <Footer />
    </div>
);
