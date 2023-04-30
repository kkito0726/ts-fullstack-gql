import React from "react";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="px-6 py-5 border-b bg-white">
      <div className="flex justify-between">
        <section>
          <span className="text-slate-600 font font-semibold">Todo List</span>
        </section>
        <section>
          <ul>
            <li>Item 1</li>
          </ul>
        </section>
      </div>
    </header>
  );
};
