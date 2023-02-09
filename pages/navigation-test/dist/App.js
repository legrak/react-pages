import React from "react";
import { Link } from "./Link";
export const App = () => {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("a", { href: "https://google.com" }, "Default link to google")),
        React.createElement("div", null,
            React.createElement("a", { href: "#foo-bar" }, "Default link to hash")),
        React.createElement(Link, { text: "Nav to google", href: "https://google.com" }),
        React.createElement(Link, { text: "relative link to about", href: "/about" }),
        React.createElement(Link, { text: "relative link to hash", href: "#foo-bar" })));
};
//# sourceMappingURL=App.js.map