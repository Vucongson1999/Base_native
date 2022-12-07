import { takeLatest, put } from 'redux-saga/effects'
import { itemActions } from '@/actions'
import { actionTypes } from '@/constants'
import { itemApi } from '@/api'

function* handleFetchListItems({ payload }) {
    try {
        const res = yield itemApi.fetchList()
        yield put(itemActions.fetchListSuccess({
            list: res
        }))
    } catch (error) {
        yield put(itemActions.fetchListFailure({
            message: error.message
        }))
    }
}

const itemSaga = [
    takeLatest(actionTypes.itemTypes.FETCH_ITEMS_REQUEST, handleFetchListItems)
]

export default itemSaga;