import React from "react";
import { Link } from "./Link";

export const App: React.FC = () => {
  return (
    <div>
      <div>
        <a href="https://google.com">Default link to google</a>
      </div>
      <div>
        <a href="#foo-bar">Default link to hash</a>
      </div>
      <Link text="Nav to google" href="https://google.com" />
      <Link text="relative link to about" href="/about" />
      <Link text="relative link to hash" href="#foo-bar" />
    </div>
  );
};
