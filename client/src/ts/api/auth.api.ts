import { LoginFormData } from "../types/loginTypes";
import { SignUpFormData } from "../types/signupTypes";

const API_BASE_URL = "/api";

const signUp = async (formData: SignUpFormData): Promise<Response> => {
  const url = `${API_BASE_URL}/signup`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...formData, role: 'USER'}),
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

const logout = async (): Promise<Response> => {
  const url = `${API_BASE_URL}/logout`;

  return fetch(url, {
    method: "POST",
    credentials: "include",
  });
};

export { login, signUp, logout };
