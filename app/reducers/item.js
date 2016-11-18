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
            height: 100,
            type: 'RECT'
        },
        {
            id: 2,
            top : 100,
            left: 100,
            width: 100,
            height: 100,
            type: 'IMAGE',
            src: 'http://nv2.tveta.naver.net/libs/1145/1145399/20161031164404-9ws0rxr5.png'
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
        case constants.RESIZE_ITEM_BY_COLON:
            let selectItemIdx1 = state.items.findIndex((item) => item.id === state.selectItemIds[0]);

            return update(state, {items : {
                [selectItemIdx1]: {
                    width : {$set : action.width},
                    height : {$set : action.height},
                }
            }});
        default:
            return state;
    }
};