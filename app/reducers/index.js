import {combineReducers} from 'redux';
import guideBox from './guideBox';
import item from './item'
import contents from './contents'

const reducers = combineReducers({
    guideBox,
    item,
    contents
});

export default reducers;