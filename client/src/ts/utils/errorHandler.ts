const errorHandler = (error: Error): string => {
  if (error instanceof TypeError) {
    return "Something went wrong. Please try again later";
  } else {
    return error.message;
  }
};

export default errorHandler;
