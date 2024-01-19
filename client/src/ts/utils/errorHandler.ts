import useAuth from "../hooks/useAuth";
import useRouter from "../hooks/useRouter";

const TokenError = [
  "Wrong authentication token",
  "Authentication token missing",
];

const [_authState, updateAuth] = useAuth();
const errorHandler = (error: Error): string => {
  if (error instanceof TypeError) {
    return "Something went wrong. Please try again later";
  } else if (TokenError.includes(error.message)) {
    updateAuth({
      user: null,
      isAuthenticated: false,
    });
    const router = useRouter();
    router.push("/");
    return "Your session has expired. Please log in again";
  } else {
    return "Something went wrong. Please try again later";
  }
};

export default errorHandler;
