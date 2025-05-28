import { eventMap } from "@testing-library/user-event/dist/cjs/event/eventMap.js";
import React from "react";

const user = {
    email: '',
    password: '',
    isLoggedIn: false,
};

const logOut = () => {};

const newContext = React.createContext({
    user,
    logOut,
});

export default newContext;