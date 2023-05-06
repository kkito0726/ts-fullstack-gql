import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import { toast } from "react-hot-toast";
import { useTodos } from "../../hooks/useTodos";
type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  const { isDarkMode, toggleIsDarkMode } = useDarkModeContext();
  const { removeAllTodo } = useTodos();
  const handleRemoveAllTodo: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const isRemoveOk = window.confirm("Todoをすべて削除しますか？");

    if (!isRemoveOk) {
      return;
    }

    removeAllTodo();
  };
  return (
    <header className="px-6 py-3 border-b bg-white sticky top-0 dark:bg-zinc-800 dark:border-zinc-700">
      <div className="flex justify-between">
        <section>
          <span className="text-slate-600 font font-semibold dark:text-zinc-100">
            Todo List
          </span>
        </section>
        <section>
          <ul>
            <li>
              <button onClick={toggleIsDarkMode}>
                {isDarkMode ? <BsSun className="text-zinc-100" /> : <BsMoon />}
              </button>
              <button onClick={handleRemoveAllTodo}>
                <BiTrash className="flex justify-between items-center w-full h-hull text-start text-red-200  hover:bg-gray-300  rounded-full px-3" />
              </button>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
};
