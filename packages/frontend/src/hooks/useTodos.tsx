import {
  useTodosQuery,
  useMakeTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
  TodosDocument,
} from "../__generated__/graphql";

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
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const makeTodo = async (title: string) => {
    try {
      await makeTodoMut({
        variables: {
          makeTodoInput: {
            title,
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
