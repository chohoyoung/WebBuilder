import React, { Component } from 'react';
import {render} from 'react-dom';

import {DragSource} from 'react-dnd';
import {connect} from 'react-redux';

import * as actions from './actions';
import {DragConstants} from './constants/DragConstants';
import GuideColon from './GuideColon';

const style = {
    width: "100px",
    height: "100px",
    border: "1px solid #000"
};

// 드레그 시작시 호출
const guideBoxSpec = {
    // beginDrag에서 리턴한 값이 target의 drop에서 받는 getItem() 값이다. props는 현재 compoenent의 this.props를 넘겨준다. Can일경우 움직일때마다 루프
    beginDrag: function (props) {
        const guideBoxPos = {
            guideBoxLayoutPos: props.guideBoxLayoutPos,
            type: DragConstants.type.GUIDE_BOX,
            isShow: props.isShow
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
    return {
        guideColonPos: state.guideColon.colon,
        guideBoxLayoutPos: state.guideBox.layout,
        isShow: state.guideBox.isShow
    }
}

// GuideBox의 Layout의 style을 구축해서 리턴해준다.
let getPosStyles = (props) => {
    const { guideBoxLayoutPos } = props;
    const transform = `translate3d(${guideBoxLayoutPos.left}px, ${guideBoxLayoutPos.top}px, 0)`;

    return {
        position: 'absolute',
        width: guideBoxLayoutPos.width,
        height: guideBoxLayoutPos.height,
        transform: transform,
        WebkitTransform: transform
    };
}

class GuideBox extends Component {

    render() {
        const {guideColonPos, connectDragSource, isDragging, isShow } = this.props;

        if (isDragging || !isShow) {
            return null;
        }

        return connectDragSource(
            <div className="guide-layout" style={getPosStyles(this.props)}>
                { Object.keys(guideColonPos).map((key, idx) => <GuideColon key={idx} id={key} colonId={key} />) }
            </div>
        );
    }
}

export default connect(mapStateToProps)(DragSource("Item", guideBoxSpec, collect)(GuideBox));