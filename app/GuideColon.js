import React, { Component } from 'react';
import {render} from 'react-dom';

import {DragSource} from 'react-dnd';
import {connect} from 'react-redux';

import * as actions from './actions';
import {DragConstants} from './constants/DragConstants';

// 드레그 시작시 호출
const guideColonSpec = {
    beginDrag: function (props) {
        const beginDragResult = {
            guideBoxLayoutPos: props.guideBoxLayoutPos,
            type: DragConstants.type.GUIDE_COLON,
            colonId: props.colonId,
            isShow: props.isShow
        }

        return beginDragResult;
    }
}

// 드래그 관련된 속성 정의
let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

// guideBoxLayoutPos는 droptarget인 content에서 초기 값으로 사용하기 위해서 필요하다.
const mapStateToProps = (state) => {
    return {
        guideColonPos: state.guideColon.colon,
        guideBoxLayoutPos: state.guideBox.layout
    }
}

let getColonPosStyle = (props) => {
    const { guideColonPos, guideBoxLayoutPos, colonId } = props;

    switch (props.colonId) {
        case "tl" :
            return {left: 0, top: 0};
        case "tc" :
            return {left: (guideBoxLayoutPos.width / 2), top: 0};
        case "tr" :
            return {left: (guideBoxLayoutPos.width), top: 0};
        case "l" :
            return {left: 0, top: (guideBoxLayoutPos.height / 2)};
        case "r" :
            return {left: (guideBoxLayoutPos.width), top: (guideBoxLayoutPos.height / 2)};
        case "bl" :
            return {left: 0, top: (guideBoxLayoutPos.height)};
        case "bc" :
            return {left: (guideBoxLayoutPos.width / 2), top: (guideBoxLayoutPos.height)};
        case "br" :
            return {left: (guideBoxLayoutPos.width), top: (guideBoxLayoutPos.height)};
    }

    return {
        left: guideColonPos[colonId].left,
        top : guideColonPos[colonId].top
    };
}

class GuideColon extends Component {


    render() {
        const { colonId, connectDragSource, setGuideColonPos, guideBoxLayoutPos} = this.props;

        return connectDragSource(
            <span className="top-left-resize-cursor guide-handle" style={getColonPosStyle(this.props)}></span>
        );
    }
}

export default connect(mapStateToProps)(DragSource("Item", guideColonSpec, collect)(GuideColon));