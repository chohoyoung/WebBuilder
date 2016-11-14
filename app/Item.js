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

class Item extends Component {
    render() {
        const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;

        if (isDragging) {
            return null;
        }

        return connectDragSource(
            <div style={{ left:left, top:top, position: "absolute", width: "100px", height: "100px", border: "1px solid #000"}} >Rect</div>
        );
    }
}

export default DragSource("Item", itemSpec, collect)(Item);