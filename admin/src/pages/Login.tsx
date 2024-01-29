import { Show, createSignal } from "solid-js";
import Spinner from "../components/Spinner";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [isLoading, setLoading] = createSignal(false);
  const [error, SetError] = createSignal("");
  const [formData, setFormData] = createSignal({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    await login(formData());
  };

  const handleErrorModalClick = () => {
    SetError("");
  };

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async (formData: FormData) => {
    SetError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
    } catch (error) {
      SetError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div class="login w-screen h-screen">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-slate-300 rounded-lg shadow-black shadow-2xl">
          <h1 class="text-center mb-6 text-3xl font-semibold">
            Dashen Tour Admin
          </h1>
          <form class="flex flex-col gap-4" onsubmit={handleSubmit}>
            <div class="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                class="p-2 border-2 rounded-lg border-gray-500 focus:border-[#411d0d] outline-none bg-transparent"
                value={formData().email}
                name="email"
                onchange={handleChange}
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                class="p-2 border-2 rounded-lg border-gray-500 focus:border-[#411d0d] outline-none bg-transparent"
                value={formData().password}
                name="password"
                onchange={handleChange}
                required
              />
            </div>
            <Show when={error() !== ""}>
              <div
                class="flex border-2 p-3 rounded-lg border-red-600 text-red-600 justify-between mt-4"
                onclick={handleErrorModalClick}
              >
                <span>Incorrect email or password</span>
                <div onclick={handleErrorModalClick}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="red"
                    class="cursor-pointer"
                  >
                    <path
                      d="M17.0206 18.0105C17.294 18.2839 17.7372 18.2839 18.0106 18.0105C18.2839 17.7371 18.2839 17.2939 18.0106 17.0206L12.9901 12.0001L18.0105 6.97967C18.2839 6.7063 18.2839 6.26309 18.0105 5.98972C17.7371 5.71635 17.2939 5.71635 17.0206 5.98972L12.0001 11.0101L6.97969 5.98969C6.70632 5.71633 6.2631 5.71633 5.98974 5.98969C5.71637 6.26306 5.71637 6.70628 5.98974 6.97964L11.0102 12.0001L5.98969 17.0206C5.71633 17.294 5.71633 17.7372 5.98969 18.0105C6.26306 18.2839 6.70628 18.2839 6.97964 18.0105L12.0001 12.99L17.0206 18.0105Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </div>
              </div>
            </Show>

            <button
              type="submit"
              class="bg-main py-2 rounded-lg text-white flex justify-center"
            >
              {isLoading() ? (
                <div class="flex gap-3">
                  <Spinner />
                  Logging in
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
