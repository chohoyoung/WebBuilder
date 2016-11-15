import * as constants from '../actions/ActionConstants';

// 초기값 생성
const initState = {
    selId : 0
};

export default function setItemFocus(state = initState, action) {
    switch(action.type) {
        case constants.SET_ITEM_FOCUS:
            console.log(action.selId);
            return Object.assign({}, action);
        default :
            return state;
    }
};