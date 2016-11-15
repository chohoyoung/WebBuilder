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

// 드레그 시작시 호출
const guideBoxSpec = {
    beginDrag: function (props) {
        const { id, left, top } = props;
        return { id, left, top };
    }
}

// 드래그 관련된 속성 정의
let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class GuideBox extends Component {
    setGuideBoxPos() {
        this.props.setGuideBoxPos({
            tl : {left: 0, top: 0},
            tc : {left: 100, top: 0},
            tr : {left: 200, top: 0},
            l : {left: 0, top: 100},
            r : {left: 200, top: 100},
            bl : {left: 0, top: 200},
            bc : {left: 100, top: 200},
            br : {left: 200, top: 200}
        });
    }

    render() {
        console.log(this.props.guideBoxPos);

        const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;

        return connectDragSource(
            <div className="guild-layout" >
                <span class="top-left-resize-cursor guide-handle"></span>

            </div>
        );
    }
}

export default DragSource("Item", guideBoxSpec, collect)(GuideBox);