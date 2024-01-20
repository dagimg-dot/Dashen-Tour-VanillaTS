const Login = () => {
  const handleClick = () => {
    console.log("login clicked");
  };

  return <div onclick={handleClick}>Login</div>;
};

export default Login;
