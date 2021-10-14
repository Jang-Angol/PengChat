import { createAction, handleAction } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

/*
 요청을 위한 액션 타입을 payload로 설정 ex) "sample/GET_POST"
*/

export const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType
);

const initialState = {};

const loading = handleAction(
    {
        [START_LOADING]: (state,action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (state,action) => ({
            ...state,
            [action.payload]: true,
        }),
        initialState
    }
);

export default loading;