import * as constants from '../actions/ActionConstants';
import update from 'react-addons-update';

// 초기값 생성
const initState = {
    colon: {
        tl: {left: 0, top: 0},
        tc: {left: 100, top: 0},
        tr: {left: 200, top: 0},
        l: {left: 0, top: 100},
        r: {left: 200, top: 100},
        bl: {left: 0, top: 200},
        bc: {left: 100, top: 200},
        br: {left: 200, top: 200}
    }
};

export default function guideColonReducer(state = initState, action) {

    switch(action.type) {
        default :
            return state;
    }

};