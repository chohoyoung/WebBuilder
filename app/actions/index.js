import * as constants from './ActionConstants';

// Guide Action
export function setGuideBoxPos(pos) {
    return {
        type: constants.SET_GUIDEBOX_POS,
        pos
    };
}

// Item Action
export function setItemFocus(id) {
    return {
        type: constants.SET_ITEM_FOCUS,
        selId : id
    }
}

// Content Action
export function addItemInContents(newItem) {
    return {
        type: constants.ADD_ITEM_IN_CONTENT,
        item: newItem
    }
}