import React, { ReactNode, useState } from "react";

type DropDownMenuProps = {
  clickTarget: ReactNode;
  menuItems: ReactNode[];
};

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  clickTarget,
  menuItems,
}) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);
  return (
    <div className="relative">
      <button onClick={toggleMenu}>{clickTarget}</button>

      {isMenuActive ? (
        <>
          <button
            className="fixed inset-0 h-full w-full cursor-default z-10"
            tabIndex={-1}
            onClick={() => setIsMenuActive(!isMenuActive)}
          ></button>
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow z-20 border border-gray-100 dark:bg-zinc-600 dark:border-zinc-600">
            <ul className="list-none">
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className="cursor-pointer rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-zinc-500"
                  onClick={() => setIsMenuActive(!isMenuActive)}
                >
                  {menuItem}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};
