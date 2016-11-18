import * as constants from '../actions/ActionConstants';
import update from 'react-addons-update';

// 초기값 생성
const initState = {
    selectItemIds: [],
    items: [
        {
            id: 1,
            top : 10,
            left: 10,
            width: 100,
            height: 100
        },
        {
            id: 2,
            top : 100,
            left: 100,
            width: 100,
            height: 100
        }
    ]
};

export default function itemReducers(state = initState, action) {
    switch(action.type) {
        case constants.SET_SELECT_ITEM:
            return update(state, {selectItemIds : {
                $set: [action.itemId]
            }});
        case constants.MOVE_ITEM_POS:
            let selectItemIdx = state.items.findIndex((item) => item.id === state.selectItemIds[0]);

            return update(state, {items : {
                [selectItemIdx]: {
                    left : {$set : action.left},
                    top : {$set : action.top},
                }
            }});
        default:
            return state;
    }
};