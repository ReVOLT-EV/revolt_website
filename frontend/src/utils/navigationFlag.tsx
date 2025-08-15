// navigationFlag.ts
let didNavigate = false;

export const setDidNavigate = () => {
  didNavigate = true;
};

export const getDidNavigate = () => {
  const result = didNavigate;
  didNavigate = false;
  return result;
};
