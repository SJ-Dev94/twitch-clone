const windowSize = (oldwindowSize = null, action) => {
  switch (action.type) {
    case "UPDATING_WINDOW_SIZE":
      return action.width;
    default:
      return oldwindowSize;
  }
};

export default windowSize;