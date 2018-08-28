import { all, fork } from 'redux-saga/effects'
import commentSaga from 'store/sagas/commentSaga'
import localeSaga from 'store/sagas/localeSaga'

export default function* root() {
    yield all([
      localeSaga(),
      commentSaga(),
    ])
  }
  