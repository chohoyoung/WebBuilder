import * as constants from '../actions/ActionConstants';

// 초기값 생성
const initState = {
    pos : {
        tl: {x: 0, y: 0},
        tc: {x: 0, y: 0},
        tr: {x: 0, y: 0},
        l: {x: 0, y: 0},
        r: {x: 0, y: 0},
        bl: {x: 0, y: 0},
        bc: {x: 0, y: 0},
        br: {x: 0, y: 0}
    }
};

export default function setGuideBoxPos(state = initState, action) {
    switch(action.type) {
        case constants.SET_GUIDEBOX_POS:
            console.log(action.pos);
            return Object.assign({}, {pos: action.pos});
        default :
            return state;
    }
};