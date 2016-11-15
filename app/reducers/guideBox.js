import * as constants from '../actions/ActionConstants';

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
    layout : {left: 0, top: 0, width:200, height: 200}
};

export default function setGuideBoxPos(state = initState, action) {
    switch(action.type) {
        case constants.SET_GUIDEBOX_POS:
            console.log(action);
            console.log(action.guildBox);
            return Object.assign({}, action.guildBox);
        default :
            return state;
    }
};