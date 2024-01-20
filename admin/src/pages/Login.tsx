const Login = () => {
  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    console.log("Submit button clicked");
  };

  return (
    <div class="h-screen bg-[#eee] flex items-center justify-center">
      <div class=" p-4 bg-white rounded-lg shadow-xl">
        <h1 class="text-center mb-6 text-3xl font-semibold">
          Dashen Tour Admin
        </h1>
        <form class="flex flex-col gap-4" onsubmit={handleSubmit}>
          <div class="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              class="p-2 border-2 rounded-lg border-gray-300 focus:border-[#411d0d] outline-none  bg-white"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              class="p-2 border-2 rounded-lg border-gray-300 focus:border-[#411d0d] outline-none bg-white"
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
  );
};

export default Login;
