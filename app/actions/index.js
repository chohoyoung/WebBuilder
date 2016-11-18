import * as constants from './ActionConstants';

// GuideBox Action
export function setGuideBoxPos(guildBox) {
    return {
        type: constants.SET_GUIDEBOX_POS,
        guildBox
    };
}
// GuideBox show/hide 설정 flag가 true면 show, falce면 hide
export function setGuideBoxShow(flag, itemPos) {
    return {
        type: constants.SET_GUIDEBOX_SHOW,
        flag: flag,
        itemPos: itemPos
    }
}

// 가이드 박스를 클릭후 움직일때 호출
export function moveGuideBox(left, top) {
    return {
        type: constants.MOVE_GUIDEBOX,
        left: left,
        top: top
    }
}

// Content Action
export function addItemInContents(newItem) {
    return {
        type: constants.ADD_ITEM_IN_CONTENT,
        item: newItem
    }
}

/*
 ITEM ACTIONS
 */
// ITEM ID를 받아서 현재 선택된 ITEM의 ID를 설정한다.
export function setSelectItem(itemId) {
    return {
        type: constants.SET_SELECT_ITEM,
        itemId: itemId
    }
}

// ITEM을 움직일때 사용한다 left와 top는 현재 좌표값에서 이동값을 더한 값이 나온다, 즉 100에서 150이동시 150으로 넘어온다.
export function moveItemPos(left, top) {
    return {
        type: constants.MOVE_ITEM_POS,
        left: left,
        top: top
    }

}