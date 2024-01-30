import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  return (
    <div className="flex flex-col border-r h-screen pr-5 gap-2">
      <span>
        {activeLink == "/" ? "🟢" : "🟠"}
        <NavLink to="/" onClick={(e) => setActiveLink(e.target.pathname)}>
          Without React-query
        </NavLink>
      </span>
      <span>
        {activeLink == "/query" ? "🟢" : "🟠"}
        <NavLink to="/query" onClick={(e) => setActiveLink(e.target.pathname)}>
          React-query
        </NavLink>
      </span>
      <span>
        {activeLink == "/queryCount" ? "🟢" : "🟠"}
        <NavLink
          to="/queryCount"
          onClick={(e) => setActiveLink(e.target.pathname)}
        >
          Refetch
        </NavLink>
      </span>
      <span>
        {activeLink == "/mutation" ? "🟢" : "🟠"}
        <NavLink
          to="/mutation"
          onClick={(e) => setActiveLink(e.target.pathname)}
        >
          Mutation
        </NavLink>
      </span>
    </div>
  );
};

export default SideBar;
