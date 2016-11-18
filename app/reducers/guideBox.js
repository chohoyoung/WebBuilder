import * as constants from '../actions/ActionConstants';
import update from 'react-addons-update';

// 초기값 생성
const initState = {
    layout : {left: 0, top: 0, width:200, height: 200},
    isShow : false

};

export default function guideBoxReducer(state = initState, action) {
    let generatorGuideBoxPos = (itemPos) => {
        //left, top, width, height
        const result = {
            layout : {left: itemPos.left, top: itemPos.top, width: itemPos.width, height: itemPos.height},
            isShow : true
        }

        return result;
    };

    // left, top, colonId값을 계산해서 guideBox의 left, top, width, height를 계산한다.
    let computeGuideBoxSizePos = (left, top, colonId, state, guideBoxLayoutPos) => {
        let {layout} = state;
        switch(colonId) {
            case 'br':
                return update(
                    state, {
                        layout: {
                            width: {$set: guideBoxLayoutPos.width + left},
                            height: {$set: guideBoxLayoutPos.height + top}
                        }
                    }
                );
        }
    };

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
        case constants.RESIZE_GUIDEBOX_BY_COLON:
            const {left, top, colonId, guideBoxLayoutPos} = action;
            return computeGuideBoxSizePos(left, top, colonId, state, guideBoxLayoutPos);
        default :
            return state;
    }

};