import React, { Component } from 'react';
import {render} from 'react-dom';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';

import Item from './Item';
import GuideBox from './GuideBox';
import * as actions from './actions';

const ContainerSpec = {
    // canDrop이 있으면 drop은 동작안한다.
    drop(props, monitor, component) {
        const item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        // console.log(item);
        // console.log(monitor);
        // component.moveItem(left, top);
    },
    canDrop: function (props, monitor) {
        let item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();

        let guideBoxLayoutPos = {
            left : item.guideBoxLayoutPos["left"] + delta.x,
            top : item.guideBoxLayoutPos["top"] + delta.y
        };

        props.moveGuideBoxPos({
            "layout": guideBoxLayoutPos,
            "colon": item.guideBoxColonPos
        });
    }

};

let collect = (connect, monitor)=> {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

// contents reducers의 items와 this.props.items와 연계
const mapStateToProps = (state) => {
    return {
        items: state.contents.items
    }
}

// dispatch메소드를 연결
const mapDispatchToProps = (dispatch) => {
    return {
        moveGuideBoxPos: (pos) => { dispatch(actions.setGuideBoxPos(pos)) }
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
                {this.props.items.map((item) => <Item key={item.id} left={item.left} top={item.top} />)}
                <GuideBox />
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(DropTarget("Item", ContainerSpec, collect)(Content)));
