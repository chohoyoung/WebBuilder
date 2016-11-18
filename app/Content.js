import React, { Component } from 'react';
import {render} from 'react-dom';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';

import Item from './Item';
import GuideBox from './GuideBox';
import * as actions from './actions';
import {DragConstants} from './constants/DragConstants';

const ContainerSpec = {
    drop : function (props, monitor) {
        let item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();

        const left = Math.round(item.guideBoxLayoutPos["left"]+3.5 + delta.x);
        const top = Math.round(item.guideBoxLayoutPos["top"]+3.5 + delta.y);

        switch(item.type) {
            case DragConstants.type.GUIDE_BOX:
                props.moveGuideBox(left, top);
                break;
            case DragConstants.type.GUIDE_COLON:
                props.resizeGuideBoxByColon(delta.x, delta.y, item.colonId, item.guideBoxLayoutPos);
                break;
        }

    },
    hover : function (props, monitor, component) {
        let item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();

        const left = Math.round(item.guideBoxLayoutPos["left"]+3.5 + delta.x);
        const top = Math.round(item.guideBoxLayoutPos["top"]+3.5 + delta.y);

        switch(item.type) {
            case DragConstants.type.GUIDE_BOX:
                props.moveItemPos(left, top);
                break;
            case DragConstants.type.GUIDE_COLON:
                props.resizeGuideBoxByColon(delta.x, delta.y, item.colonId, item.guideBoxLayoutPos);
                props.resizeItemByColon(props.guideBoxLayoutPos.width, props.guideBoxLayoutPos.height);
                break;
        }
        // props.moveItemPos(left, top);
    }

};

let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

// contents reducers의 items와 this.props.items와 연계
const mapStateToProps = (state) => {
    return {
        items: state.item.items,
        guideBoxLayoutPos: state.guideBox.layout,
    }
}

// dispatch메소드를 연결
const mapDispatchToProps = (dispatch) => {
    return {
        moveGuideBox: (left, top) => { dispatch(actions.moveGuideBox(left, top)) },
        moveItemPos: (left, top) => {dispatch(actions.moveItemPos(left, top))},
        resizeGuideBoxByColon: (left, top, colonId, guideBoxLayoutPos) => {dispatch(actions.resizeGuideBoxByColon(left, top, colonId, guideBoxLayoutPos))},
        resizeItemByColon: (width, height) => { dispatch(actions.resizeItemByColon(width, height) )}
    }
}

class Content extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const { hideSourceOnDrag, connectDropTarget } = this.props;

        return connectDropTarget(
            <section className="about text-center" id="about" style={{height: "500px", position: 'relative'}} >
                {this.props.items.map((item) => <Item key={item.id} id={item.id} left={item.left} top={item.top} width={item.width} height={item.height} />)}
                <GuideBox />
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(DropTarget("Item", ContainerSpec, collect)(Content)));
