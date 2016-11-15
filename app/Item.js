import React, { Component } from 'react';
import {render} from 'react-dom';

import {DragSource} from 'react-dnd';
import {connect} from 'react-redux';

import * as actions from './actions';

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
    },
    // canDrag(props, monitor) {
    //     console.log(props);
    // },
    isDragging(props, monitor) {
        console.log(props)
    }
}

let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const mapStateToProps = (state) => {
    return {
        guideBoxPos: state.guideBox.pos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGuidBoxPos: (pos) => { dispatch(actions.setGuidBoxPos(pos)) }
    }
}

class Item extends Component {
    setGuideBoxPos() {
        console.log(this)
        this.props.setGuidBoxPos({
            tl : {x:10, y:0},
            tc : {x:10, y:0},
            tr : {x:10, y:0},
            l : {x:10, y:0},
            r : {x:10, y:0},
            bl : {x:10, y:0},
            bc : {x:10, y:0},
            br : {x:10, y:0}
        });
    }

    render() {
        console.log(this.props.guideBoxPos);

        const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;

        if (isDragging) {
            return null;
        }

        return connectDragSource(
            <div style={{ left:left, top:top, position: "absolute", width: "100px", height: "100px", border: "1px solid #000"}} onClick={this.setGuideBoxPos.bind(this)}>Rect</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragSource("Item", itemSpec, collect)(Item));