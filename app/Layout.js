import React, { Component } from 'react';
import {render} from 'react-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';



class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Layout;