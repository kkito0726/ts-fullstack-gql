import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { Todo } from "../../__generated__/graphql";
import { DropDownMenu } from "../Elements/DropdownMenu";

type TodoItemProps = {
  todoItem: Todo;
  removeTodo: (id: string) => Promise<void>;
  updateTodoCompleteStatus: (
    id: string,
    isCompleted: boolean
  ) => void | Promise<void>;
  updateTodoTitle: (id: string, title: string) => void | Promise<void>;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todoItem,
  removeTodo,
  updateTodoCompleteStatus,
  updateTodoTitle,
}) => {
  const [isTitleEditing, setIsTitleEditing] = useState<boolean>(false);
  const [todoTitleInput, setTodoTitleInput] = useState<string>(todoItem.title);
  const handleRemoveBtnClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    removeTodo(todoItem.id);
  };

  const handleCompleteTodoCheckboxChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    //
    updateTodoCompleteStatus(todoItem.id, event.target.checked);
  };

  const handleTodoTitleInput: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTodoTitleInput(event.target.value);
  };

  const handleEditTitleBtnClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setIsTitleEditing(true);
  };

  const handleTodoTitleInputBlur: React.FocusEventHandler<
    HTMLInputElement
  > = async () => {
    try {
      await updateTodoTitle(todoItem.id, todoTitleInput);
      setIsTitleEditing(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  return (
    <article
      className={`flex justify-between items-center shadow-sm bg-white rounded border-l-8 my-4 px-4 h-20 ${
        todoItem?.isCompleted ? "border-emerald-500" : "border-blue-600"
      } dark:bg-zinc-700`}
      key={todoItem?.id}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todoItem?.isCompleted}
          className="w-4 h-4"
          onChange={handleCompleteTodoCheckboxChange}
        />

        <div className="flex flex-col ml-4">
          {isTitleEditing ? (
            <input
              className="text-slate-600 dark:bg-zinc-700 dark:text-zinc-100"
              value={todoTitleInput}
              onChange={handleTodoTitleInput}
              autoFocus
              onBlur={handleTodoTitleInputBlur}
            />
          ) : (
            <p
              className={`${
                todoItem?.isCompleted
                  ? "text-emerald-500 line-through"
                  : "text-slate-600 dark:text-zinc-100"
              }`}
            >
              {todoItem?.title}
            </p>
          )}

          <small className="text-gray-400">
            {todoItem?.createdAt.toISOString().split("T")[0]}
          </small>
        </div>
      </div>

      <DropDownMenu
        clickTarget={
          <small className="text-gray-500 hover:bg-gray-100 p-1 rounded-full dark:hover:bg-zinc-600">
            •••
          </small>
        }
        menuItems={[
          <div key={1}>
            <button
              className="flex justify-between items-center w-full h-hull text-start text-slate-600 dark:text-zinc-100"
              onClick={handleEditTitleBtnClick}
            >
              <span>Edit</span>
              <AiOutlineEdit />
            </button>
          </div>,
          <button
            key={2}
            onClick={handleRemoveBtnClick}
            className="flex justify-between items-center w-full h-hull text-start text-red-400"
          >
            <span>Remove</span>
            <BiTrash />
          </button>,
        ]}
      />
    </article>
  );
};
