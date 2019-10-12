const fetchRequest = type => ({ type });

const fetchSuccess = (type, data) => ({
  type,
  payload: data,
});

const fetchFailure = (type, error) => ({
  type,
  payload: error,
});

export {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
};
