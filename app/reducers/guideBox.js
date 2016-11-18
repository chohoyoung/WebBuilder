import * as constants from '../actions/ActionConstants';
import update from 'react-addons-update';

// 초기값 생성
const initState = {
    colon: {
        tl : {left: 0, top: 0},
        tc : {left: 100, top: 0},
        tr : {left: 200, top: 0},
        l : {left: 0, top: 100},
        r : {left: 200, top: 100},
        bl : {left: 0, top: 200},
        bc : {left: 100, top: 200},
        br : {left: 200, top: 200}
    },
    layout : {left: 0, top: 0, width:200, height: 200},
    isShow : false

};

export default function guideBoxReducer(state = initState, action) {
    let generatorGuideBoxPos = (itemPos) => {
        //left, top, width, height
        const result = {
            colon: {
                tl : {left: 0, top: 0},
                tc : {left: (itemPos.width / 2), top: 0},
                tr : {left: (itemPos.width), top: 0},
                l : {left: 0, top: (itemPos.height / 2)},
                r : {left: (itemPos.width), top: (itemPos.height / 2)},
                bl : {left: 0, top: (itemPos.height)},
                bc : {left: (itemPos.width / 2), top: (itemPos.height)},
                br : {left: (itemPos.width), top: (itemPos.height)}
            },
            layout : {left: itemPos.left, top: itemPos.top, width: itemPos.width, height: itemPos.height},
            isShow : true
        }
        return result;
    }

    switch(action.type) {
        case constants.SET_GUIDEBOX_POS:
            return Object.assign({}, action.guildBox);
        case constants.SET_GUIDEBOX_SHOW:
            return generatorGuideBoxPos(action.itemPos);
        case constants.MOVE_GUIDEBOX:
             return update(state, {
                layout: {
                    left: {$set: action.left},
                    top : {$set: action.top}
                }
            });
        default :
            return state;
    }


};