export type setStateType = (
  state: object | ((prevState: object) => object),
) => void;
