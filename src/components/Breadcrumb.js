import React from "react";
// import { useLocation } from "react-router-dom";

const Breadcrumb = ({ links }) => {
  //   const location = useLocation();
  //   console.log(location);

  //   let currentLink = "";
  //   const crumb = location.pathname
  //     .split("/")
  //     .filter((crumb) => crumb !== "")
  //     .map((crumb) => {
  //       currentLink = +`/${crumb}`;

  //       return (
  //         <div className="crumb" key={crumb}>
  //           <Link to={currentLink}>{crumb}</Link>
  //         </div>
  //       );
  //     });
  return (
    // <div className="">{crumb}</div>
    <nav
      className="flex justify-center md:justify-start"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {links.map((link, index) => (
          <li key={link.to}>
            {index !== 0 && "> "}
            <a
              href={link.to}
              className="font-medium text-gray-500 hover:text-gray-700"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
