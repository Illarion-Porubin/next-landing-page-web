import React from "react";
import NavLst from "../navList/NavLinks";

const Navigate = () => {
  const links = [
    { title: "About", link: "#about" },
    { title: "Works", link: "#works" },
    { title: "Price", link: "#price" },
    { title: "Contacts", link: "#contacts" },
  ];

  return (
    <nav>
      <ul className="flex w-[480px] h-auto justify-around">
        {links.map((item: { title: string, link: string }) => (
          <NavLst item={item} key={item.title} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigate;
