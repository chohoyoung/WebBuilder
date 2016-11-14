import React, { Component } from 'react';
import {render} from 'react-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 footer-para">
                            <p>&copy;WebBuilder All right reserved.</p>
                        </div>

                        <div className="col-xs-6 text-right">
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-skype"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;