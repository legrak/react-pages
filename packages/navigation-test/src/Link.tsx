import React from "react";
import { navigate } from "./wix";
import "./link.css";

export const Link: React.FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  return (
    <div className="link" onClick={() => navigate(href)}>
      {text}
    </div>
  );
};
