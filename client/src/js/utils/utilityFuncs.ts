const isObject = (variable: unknown) => {
  return typeof variable === "object";
};

const isEventFull = (variable: Object) => {
  return Object.keys(variable).includes("event");
};

export { isObject, isEventFull };
