import React, { Component } from 'react';
import {render} from 'react-dom';

import * as actions from './actions';

const style = {
};

class Image extends Component {
    render() {
        return (
            <div style={{ left:left, top:top, position: "absolute", width:width, height:height, border: "1px solid #000"}} onClick={this.clickItem.bind(this)}>Rect</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);