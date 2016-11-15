import * as constants from './ActionConstants';

export function setGuidBoxPos(pos) {
    return {
        type: constants.SET_GUIDEBOX_POS,
        pos
    };
}

export function setItemFocus(id) {
    return {
        type: constants.SET_ITEM_FOCUS,
        selId : id
    }
}