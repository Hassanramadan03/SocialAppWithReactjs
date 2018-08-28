import { localeReducer as locale } from 'react-localize-redux'
import {
  combineReducers
} from 'redux-immutable'

// - Import reducers
import { authorizeReducer } from 'store/reducers/authorize'
import { circleReducer } from 'store/reducers/circles'
import { commentReducer } from 'store/reducers/comments'
import { globalReducer } from 'store/reducers/global'
import { imageGalleryReducer } from 'store/reducers/imageGallery'
import { notificationReducer } from 'store/reducers/notifications'
import { postReducer } from 'store/reducers/posts'
import { userReducer } from 'store/reducers/users'
import { voteReducer } from 'store/reducers/votes'
import { serverReducer } from 'store/reducers/server'
import { routerReducer, routerMiddleware } from 'react-router-redux'

// - Reducers
export const rootReducer = combineReducers({
    locale,
    imageGallery: imageGalleryReducer,
    post: postReducer,
    circle: circleReducer,
    comment: commentReducer,
    vote: voteReducer,
    server: serverReducer,
    authorize: authorizeReducer,
    router: routerReducer,
    user: userReducer,
    notify: notificationReducer,
    global: globalReducer
  } as any)