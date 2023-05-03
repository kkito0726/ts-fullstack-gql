import { toast } from "react-hot-toast";
import {
  useTodosQuery,
  useMakeTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
  TodosDocument,
} from "../__generated__/graphql";
import { isEmptyString } from "../util/isEmptyString";

export const useTodos = () => {
  const {
    data: todoData,
    loading: todoDataLoading,
    error: todoDataError,
  } = useTodosQuery();
  const [
    makeTodoMut,
    { loading: makeTodoMutLoading, error: makeTodoMutError },
  ] = useMakeTodoMutation();
  const [
    removeTodoMut,
    { loading: removeTodoMutLoading, error: removeTodoMutError },
  ] = useRemoveTodoMutation();
  const [
    updateTodoMut,
    { loading: updateTodoMutLoading, error: updateTodoMutError },
  ] = useUpdateTodoMutation();

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
      toast.success("Todoが削除されました");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const makeTodo = async (title: string) => {
    if (isEmptyString(title)) {
      toast.error("何も書かれていません！");
      return;
    }
    try {
      await makeTodoMut({
        variables: {
          makeTodoInput: {
            title,
          },
        },
        refetchQueries: [TodosDocument],
      });

      toast.success("Todoが設定されました！");
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
    if (isEmptyString(title)) {
      toast.error("何も書かれていません！");
      return;
    }
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
      toast.success("Todoの内容が更新されました");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return {
    todoData,
    todoDataLoading,
    todoDataError,
    makeTodo,
    makeTodoMutLoading,
    makeTodoMutError,
    removeTodo,
    removeTodoMutLoading,
    removeTodoMutError,
    updateTodoCompleteStatus,
    updateTodoTitle,
    updateTodoMutLoading,
    updateTodoMutError,
  } as const;
};
