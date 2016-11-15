import {combineReducers} from 'redux';
import guideBox from './guideBox';
import item from './item'

const reducers = combineReducers({
    guideBox, item
});

export default reducers;