const useLocation = () => {
  const location = window.location;

  return {
    pathname: location.hash.split("#").pop(),
  };
};

export default useLocation;
