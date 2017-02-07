export const TIME_REQUEST_STARTED = 'TIME_REQUEST_STARTED';
export const TIME_REQUEST_FINISHED = 'TIME_REQUEST_FINISHED';
export const TIME_REQUEST_ERROR = 'TIME_REQUEST_ERROR';

function timeRequestStarted() {
    return {type: TIME_REQUEST_STARTED};
}

function timeRequestFinished(time) {
    return {type: TIME_REQUEST_FINISHED, time};
}

function timeRequestError(errors) {
    return {type: TIME_REQUEST_ERROR, errors};
}

export function timeRequest() {
    return (dispatch) => {
        dispatch(timeRequestStarted());
        return dispatch(fetch('http://localhost:5000/test/test'))
            .then(parseResponse)
            .then(({payload}) => dispatch(timeRequestFinished(payload.time)))
            .catch(({errors}) => dispatch(timeRequestError(errors)));
    };
}