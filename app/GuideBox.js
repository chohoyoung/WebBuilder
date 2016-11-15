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
    // beginDrag에서 리턴한 값이 target의 drop에서 받는 getItem() 값이다. props는 현재 compoenent의 this.props를 넘겨준다. Can일경우 움직일때마다 루프
    beginDrag: function (props) {
        const {guideBoxPos: pos} = props;
        const guideBoxPos = {
            guideBoxColonPos: props.guideBoxColonPos,
            guideBoxLayoutPos: props.guideBoxLayoutPos
        }
        return guideBoxPos;
    }
}

// 드래그 관련된 속성 정의
let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

// GuideBox Reduce와 props 연계
const mapStateToProps = (state) => {
    console.log(state)
    return {
        guideBoxColonPos: state.guideBox.colon,
        guideBoxLayoutPos: state.guideBox.layout
    }
}

class GuideBox extends Component {

    render() {
        const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children, guideBoxColonPos, guideBoxLayoutPos } = this.props;

        if (isDragging) {
            return null;
        }

        return connectDragSource(
            <div className="guide-layout" style={{ left:guideBoxLayoutPos.left, top:guideBoxLayoutPos.top }}>
                {Object.keys(guideBoxColonPos).map((key, idx) => <span key={idx} className="top-left-resize-cursor guide-handle" style={{ left:guideBoxColonPos[key].left, top:guideBoxColonPos[key].top }}></span>)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(DragSource("Item", guideBoxSpec, collect)(GuideBox));