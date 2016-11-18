import {combineReducers} from 'redux';

import guideBox from './guideBox';
import guideColon from './guideColon';
import item from './item'
import contents from './contents'

const reducers = combineReducers({
    guideBox,
    guideColon,
    item,
    contents
});

export default reducers;