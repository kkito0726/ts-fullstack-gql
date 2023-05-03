/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";
import { Button } from "./components/Elements/Button";
import { InputField } from "./components/Elements/InputField";

import { Layout } from "./components/Layout";
import { TodoItem } from "./components/TodoItem";
import { useTodos } from "./hooks/useTodos";

function App() {
  const [title, setTitle] = useState<string>("");
  const {
    todoData,
    todoDataLoading,
    makeTodo,
    makeTodoMutLoading,
    removeTodo,
    updateTodoCompleteStatus,
    updateTodoTitle,
  } = useTodos();

  const handleTitleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTitle(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    await makeTodo(title);
    setTitle("");
  };

  return (
    <>
      <Toaster position="top-right" />
      <Layout>
        <div className="max-w-xl mx-auto p-7">
          <div className="bg-white p-6 rounded shadow">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <InputField
                className="flex flex-col mb-6"
                labelName="NEW Todo"
                placeholder="試薬の調製をする..."
                onChange={handleTitleInputChange}
                value={title}
              />
              <Button isLoading={makeTodoMutLoading}>Add Todo</Button>
            </form>
          </div>
          {todoDataLoading ? (
            <div className="flex justify-center mt-9">
              <SyncLoader color="#1563eb" />
            </div>
          ) : (
            todoData?.getTodos?.todos?.map((item) => (
              <TodoItem
                key={item?.id}
                todoItem={item!}
                removeTodo={removeTodo}
                updateTodoCompleteStatus={updateTodoCompleteStatus}
                updateTodoTitle={updateTodoTitle}
              />
            ))
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
