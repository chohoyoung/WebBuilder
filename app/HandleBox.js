import React, { Component } from 'react';
import {render} from 'react-dom';

import {DragSource} from 'react-dnd';

const style = {
    width: "100px",
    height: "100px",
    border: "1px solid #000"
};

// itemSpec
const itemSpec = {
    beginDrag: function (props) {
        const { id, left, top } = props;
        return { id, left, top };
    }
}

let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class HandleBox extends Component {
    render() {
        const { hideSourceOnDrag, left, top, connectDragSource, isDragging, isActive, children } = this.props;

        if (isActive) {
            return null;
        }

        return connectDragSource(
            <div style={{ left:left, top:top, position: "absolute", width: "30px", height: "30px", border: "1px solid #000"}} >H</div>
        );
    }
}

export default DragSource("Item", itemSpec, collect)(HandleBox);