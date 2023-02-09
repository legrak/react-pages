import React from "react";
import { navigate } from "./wix";
import "./link.css";
export const Link = ({ text, href, }) => {
    return (React.createElement("div", { className: "link", onClick: () => navigate(href) }, text));
};
//# sourceMappingURL=Link.js.map