const isObject = (variable: unknown) => {
  return typeof variable === "object" && variable !== null;
};

const isEventFull = (variable: Object) => {
  return Object.keys(variable).includes("event");
};

export { isObject, isEventFull };
