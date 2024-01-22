import LoginBackgroundImage from "../assets/bluenile-1.jpg";

const Login = () => {
  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    console.log("Submit button clicked");
  };

  return (
    <>
      {/* <img
        class="login h-screen w-screen"
        src={LoginBackgroundImage}
        alt="Gheralta"
      /> */}
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
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                class="p-2 border-2 rounded-lg border-gray-500 focus:border-[#411d0d] outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              class="bg-[#411d0d] py-2 mt-4 rounded-lg text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
