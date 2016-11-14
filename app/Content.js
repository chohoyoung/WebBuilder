import React, { Component } from 'react';
import {render} from 'react-dom';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {DropTarget} from 'react-dnd';

import Item from './Item';

const ContainerSpec = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        component.moveItem(left, top);
    }
};

let collect = (connect, monitor)=> {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class Content extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            left : 350,
            top : 350
        };
    }

    moveItem(left, top) {
        this.setState({
            left : left,
            top : top
        });
    }

    render() {
        const { hideSourceOnDrag, connectDropTarget } = this.props;
        return connectDropTarget(
            <section className="about text-center" id="about" style={{height: "500px", position: 'relative'}} >
                <Item left={this.state.left} top={this.state.top}/>
            </section>
        );
    }
}

export default DragDropContext(HTML5Backend)(DropTarget("Item", ContainerSpec, collect)(Content));