/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import {
  TodosDocument,
  useMakeTodoMutation,
  useRemoveTodoMutation,
  useTodosQuery,
  useUpdateTodoMutation,
} from "./__generated__/graphql";
import { Button } from "./components/Elements/Button";
import { InputField } from "./components/Elements/InputField";

import { Layout } from "./components/Layout";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [title, setTitle] = useState<string>("");
  const { data, loading, error } = useTodosQuery();
  const [makeTodoMut, { loading: makeTodoMutLoading }] = useMakeTodoMutation();
  const [removeTodoMut, { loading: removeTodoMutLoading }] =
    useRemoveTodoMutation();
  const [updateTodoMut, { loading: updateTodoMutLoading }] =
    useUpdateTodoMutation();

  const removeTodo = async (id: string) => {
    try {
      await removeTodoMut({
        variables: {
          removeTodoInput: {
            todoId: id,
          },
        },
        refetchQueries: [TodosDocument],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const handleTitleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTitle(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      await makeTodoMut({
        variables: {
          makeTodoInput: {
            title,
          },
        },
        refetchQueries: [TodosDocument],
      });

      setTitle("");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  const updateTodoCompleteStatus = (id: string, isCompleted: boolean) => {
    try {
      updateTodoMut({
        variables: {
          updateTodoInput: {
            todoId: id,
            isCompleted: isCompleted,
          },
        },
        refetchQueries: [TodosDocument],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  const updateTodoTitle = async (id: string, title: string) => {
    try {
      updateTodoMut({
        variables: {
          updateTodoInput: {
            todoId: id,
            title,
          },
        },
        refetchQueries: [TodosDocument],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  return (
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
            <Button>Add Todo</Button>
          </form>
        </div>
        {data?.getTodos?.todos?.map((item) => (
          <TodoItem
            key={item?.id}
            todoItem={item!}
            removeTodo={removeTodo}
            updateTodoCompleteStatus={updateTodoCompleteStatus}
            updateTodoTitle={updateTodoTitle}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
