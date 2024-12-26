import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import { HOME, MAIN, PROFILE, USER_BYUSER_ID_POSTS } from "./paths";
import Home from "../../screens/Home";
import { MainRouter } from "./MainRouter";
import { Profile } from "@/screens/Profile";
import { UserPosts } from "@/screens/UserPosts";

const routesConfig: RouteObject = {
  element: <MainRouter />,
  path: MAIN,
  children: [
    {
      index: true,
      path: HOME,
      element: <Home />,
    },
    {
      path: PROFILE,
      element: <Profile />,
    },
    {
      path: USER_BYUSER_ID_POSTS,
      element: <UserPosts />,
    },
  ],
};

const router = createBrowserRouter([routesConfig]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
