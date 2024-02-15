import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import CreateUserScreen from "screens/CreateUser/CreateUserScreen";
import UserScreen from "screens/User/UserScreen";

const router = createBrowserRouter([
    { path: "/User", element: <UserScreen />, },
    { path: "/CreateUser", element: <CreateUserScreen />, },
]);

export default router