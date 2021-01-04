export const defType = (def = {}, conf = {}) => ({
  type: Object(def).constructor,
  default: () => def,
  ...conf,
});
