import Router from "../router/router";

let router: Router | null;

const useRouter = () => {
  if (!router) {
    router = new Router();
  }

  return router;
};

export default useRouter;
