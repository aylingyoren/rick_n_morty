import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <li
          style={{ listStyle: "none", fontSize: "18px", paddingLeft: "32px" }}
        >
          Home
        </li>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
