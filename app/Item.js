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

const mapStateToProps = (state) => {
    return {
        guideBoxPos: state.guideBox.pos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGuideBoxShow: (flag, itemPos) => { dispatch(actions.setGuideBoxShow(flag, itemPos)) },
        setSelectItem: (id) => { dispatch(actions.setSelectItem(id)) },
        setGuideColonPos: (itemPos) => { dispatch(actions.setGuideColonPos(itemPos)) }
    }
}

class Item extends Component {
    clickItem() {
        const { id, left, top, width, height } = this.props;
        this.props.setGuideBoxShow(true, { left, top, width, height });
        this.props.setSelectItem(id);
    }

    render() {
        const { left, top, width, height } = this.props;

        return (
            <div style={{ left:left, top:top, position: "absolute", width:width, height:height, border: "1px solid #000"}} onClick={this.clickItem.bind(this)}>Rect</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);