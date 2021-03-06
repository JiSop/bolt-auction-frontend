import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as API from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// Action Types

// 상품명 아이템 조회 요청
const GET_ITEMS = 'item/GET_ITEMS';
const GET_ITEMS_SUCCESS = 'item/GET_ITEMS_SUCCESS';

const UNLOAD_SEARCH_RESULT = 'item/UNLOAD_SEARCH_RESULT';

// Action Creators
export const getItems = createAction(GET_ITEMS, (keyword, filter) => ({
  keyword,
  filter,
}));
export const unloadSearchResult = createAction(UNLOAD_SEARCH_RESULT);

// Action Saga
const getItemsSaga = createRequestSaga(GET_ITEMS, API.searchItem);

//rootSagaㅇ에 전달할 Saga
export function* itemSaga() {
  yield takeLatest(GET_ITEMS, getItemsSaga);
}

// Initial State
const initialState = {
  searchedItems: [],
};

// Reducer
const item = handleActions(
  {
    [GET_ITEMS_SUCCESS]: (state, action) => ({
      ...state,
      searchedItems: action.payload,
    }),
    [UNLOAD_SEARCH_RESULT]: () => initialState,
  },
  initialState,
);

export default item;
