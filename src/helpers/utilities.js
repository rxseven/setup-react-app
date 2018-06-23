// @flow

// Deley
// eslint-disable-next-line
export const delay = (callback: Function, duration: number) => {
  setTimeout(() => {
    callback();
  }, duration);
};
