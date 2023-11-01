import Router from "../router/router.js";

let router = null;

const useRouter = () => {
  if (!router) {
    router = new Router();
  }

  return router;
};

export default useRouter;
