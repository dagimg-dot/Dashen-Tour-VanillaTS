import { SignUpFormData } from "../types/signupTypes";

const API_BASE_URL = "http://localhost:5000";

const signUp = async (formData: SignUpFormData): Promise<Response> => {
  const url = `${API_BASE_URL}/api/register`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export { signUp };