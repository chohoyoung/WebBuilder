import * as constants from './ActionConstants';

/*
    GUIDE BOX ACTION
 */
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

// 가이드 박스의 사이즈를 조절한다.
export function resizeGuideBoxByColon(left, top, colonId, guideBoxLayoutPos) {
    return {
        type: constants.RESIZE_GUIDEBOX_BY_COLON,
        left: left,
        top: top,
        colonId: colonId,
        guideBoxLayoutPos: guideBoxLayoutPos
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

// colon을 움직일경우 호출 된다. width랑 height는 layout의 값, 새로 계산해도 되지만 그럼 성능이 더 느려질듯 해서 ...
export function resizeItemByColon(width, height, name) {
    return {
        type: constants.RESIZE_ITEM_BY_COLON,
        width: width,
        height: height,
        name: name
    }
}

// Content Action
export function addItemInContents(newItem) {
    return {
        type: constants.ADD_ITEM_IN_CONTENT,
        item: newItem
    }
}