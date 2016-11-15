import * as constants from '../actions/ActionConstants';

// 초기값 생성
const initState = {
    items: [
        {id: 1, top : 10, left: 10},
        {id: 2, top : 200, left: 200}
    ]
};

export default function setGuideBoxPos(state = initState, action) {
    switch(action.type) {
        case constants.ADD_ITEM_IN_CONTENT:
            console.log(action.pos);
            let newItem = update(state, { items: {$push: [action.item]}});
            return newItem;
        default:
            return state;
    }
};