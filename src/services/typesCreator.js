const createType = action => ({
  REQUEST: `${action}.REQUEST`,
  SUCCESS: `${action}.SUCCESS`,
  ERROR: `${action}.ERROR`,
});

export default createType;
