export const openModal = (productInfo) => {
  return {
    type: "OPEN_MODAL",
    payload: productInfo,
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};
