import { fork, take, call, put } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { getList } from './../apis/task';
import { STATUS_CODE } from './../constants';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';


function* watchFetchListTaskAction() {
    while (true) {
        yield take(taskTypes.FETCH_TASK);
        const resp = yield call(getList);
        const { status, data } = resp;

        if (status === STATUS_CODE.SUCCESS) {
            //dispatch action fetchListSuccess
            yield put(fetchListTaskSuccess(data));

        } else {
            //dispatch action fetchListFailed
            yield put(fetchListTaskFailed(data))
        }
    }
}
function* watchCreateTaskAction() {
    console.log('watchCreateTaskAction')
}
function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}
export default rootSaga;