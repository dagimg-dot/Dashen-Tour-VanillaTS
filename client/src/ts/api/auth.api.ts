import { LoginFormData } from "../types/loginTypes";
import { SignUpFormData } from "../types/signupTypes";

const API_BASE_URL = "/api";

const signUp = async (formData: SignUpFormData): Promise<Response> => {
  const url = `${API_BASE_URL}/register`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

const login = async (formData: LoginFormData): Promise<Response> => {
  const url = `${API_BASE_URL}/login`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export { login, signUp };
