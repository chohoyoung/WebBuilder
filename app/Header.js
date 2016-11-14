import React, { Component } from 'react';
import {render} from 'react-dom';

class Header extends Component {
    render() {
        return (
            <header className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-5 header-logo">
                            <br />
                                <a href="#"><img src="img/logo.png" className="img-responsive logo" /></a>
                        </div>

                        <div className="col-md-7">
                            <nav className="navbar navbar-default">
                                <div className="container-fluid nav-bar">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a className="menu active" href="#home" >Home</a></li>
                                            <li><a className="menu" href="#about">about us</a></li>
                                            <li><a className="menu" href="#service">our services </a></li>
                                            <li><a className="menu" href="#team">our team</a></li>
                                            <li><a className="menu" href="#contact"> contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;