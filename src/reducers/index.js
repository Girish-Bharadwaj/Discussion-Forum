import {combineReducers} from 'redux'
import { postreducer } from './posts'

const reducer=combineReducers({
    posts:postreducer
})

export default reducer