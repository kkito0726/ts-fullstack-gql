import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type GetTodoInput = {
  todoId: Scalars['String'];
};

export type GetTodoResponse = {
  __typename?: 'GetTodoResponse';
  todo?: Maybe<Todo>;
};

export type GetTodosResponse = {
  __typename?: 'GetTodosResponse';
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type MakeTodoInput = {
  title: Scalars['String'];
};

export type MakeTodoResponse = {
  __typename?: 'MakeTodoResponse';
  todo: Todo;
};

export type Mutation = {
  __typename?: 'Mutation';
  RemoveAllTodo: RemoveAllTodoResponse;
  makeTodo: MakeTodoResponse;
  removeTodo: RemoveTodoResponse;
  updateTodo: UpdateTodoResponse;
};


export type MutationMakeTodoArgs = {
  makeTodoInput: MakeTodoInput;
};


export type MutationRemoveTodoArgs = {
  removeTodoInput: RemoveTodoInput;
};


export type MutationUpdateTodoArgs = {
  updateTodoInput: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodo: GetTodoResponse;
  getTodos?: Maybe<GetTodosResponse>;
  greet?: Maybe<Scalars['String']>;
};


export type QueryGetTodoArgs = {
  getTodoInput: GetTodoInput;
};

export type RemoveAllTodoResponse = {
  __typename?: 'RemoveAllTodoResponse';
  status: Scalars['String'];
};

export type RemoveTodoInput = {
  todoId: Scalars['String'];
};

export type RemoveTodoResponse = {
  __typename?: 'RemoveTodoResponse';
  todo: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isCompleted: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateTodoInput = {
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  todoId: Scalars['String'];
};

export type UpdateTodoResponse = {
  __typename?: 'UpdateTodoResponse';
  todo: Todo;
};

export type MakeTodoMutationVariables = Exact<{
  makeTodoInput: MakeTodoInput;
}>;


export type MakeTodoMutation = { __typename?: 'Mutation', makeTodo: { __typename?: 'MakeTodoResponse', todo: { __typename?: 'Todo', id: string, title: string, isCompleted: boolean, updatedAt: Date, createdAt: Date } } };

export type RemoveAllTodoMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveAllTodoMutation = { __typename?: 'Mutation', RemoveAllTodo: { __typename?: 'RemoveAllTodoResponse', status: string } };

export type RemoveTodoMutationVariables = Exact<{
  removeTodoInput: RemoveTodoInput;
}>;


export type RemoveTodoMutation = { __typename?: 'Mutation', removeTodo: { __typename?: 'RemoveTodoResponse', todo: { __typename?: 'Todo', id: string, title: string } } };

export type UpdateTodoMutationVariables = Exact<{
  updateTodoInput: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'UpdateTodoResponse', todo: { __typename?: 'Todo', id: string, title: string, isCompleted: boolean, updatedAt: Date, createdAt: Date } } };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', getTodos?: { __typename?: 'GetTodosResponse', todos?: Array<{ __typename?: 'Todo', id: string, title: string, isCompleted: boolean, createdAt: Date, updatedAt: Date } | null> | null } | null };


export const MakeTodoDocument = gql`
    mutation MakeTodo($makeTodoInput: MakeTodoInput!) {
  makeTodo(makeTodoInput: $makeTodoInput) {
    todo {
      id
      title
      isCompleted
      updatedAt
      createdAt
    }
  }
}
    `;
export type MakeTodoMutationFn = Apollo.MutationFunction<MakeTodoMutation, MakeTodoMutationVariables>;

/**
 * __useMakeTodoMutation__
 *
 * To run a mutation, you first call `useMakeTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeTodoMutation, { data, loading, error }] = useMakeTodoMutation({
 *   variables: {
 *      makeTodoInput: // value for 'makeTodoInput'
 *   },
 * });
 */
export function useMakeTodoMutation(baseOptions?: Apollo.MutationHookOptions<MakeTodoMutation, MakeTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakeTodoMutation, MakeTodoMutationVariables>(MakeTodoDocument, options);
      }
export type MakeTodoMutationHookResult = ReturnType<typeof useMakeTodoMutation>;
export type MakeTodoMutationResult = Apollo.MutationResult<MakeTodoMutation>;
export type MakeTodoMutationOptions = Apollo.BaseMutationOptions<MakeTodoMutation, MakeTodoMutationVariables>;
export const RemoveAllTodoDocument = gql`
    mutation RemoveAllTodo {
  RemoveAllTodo {
    status
  }
}
    `;
export type RemoveAllTodoMutationFn = Apollo.MutationFunction<RemoveAllTodoMutation, RemoveAllTodoMutationVariables>;

/**
 * __useRemoveAllTodoMutation__
 *
 * To run a mutation, you first call `useRemoveAllTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAllTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAllTodoMutation, { data, loading, error }] = useRemoveAllTodoMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveAllTodoMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAllTodoMutation, RemoveAllTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAllTodoMutation, RemoveAllTodoMutationVariables>(RemoveAllTodoDocument, options);
      }
export type RemoveAllTodoMutationHookResult = ReturnType<typeof useRemoveAllTodoMutation>;
export type RemoveAllTodoMutationResult = Apollo.MutationResult<RemoveAllTodoMutation>;
export type RemoveAllTodoMutationOptions = Apollo.BaseMutationOptions<RemoveAllTodoMutation, RemoveAllTodoMutationVariables>;
export const RemoveTodoDocument = gql`
    mutation RemoveTodo($removeTodoInput: RemoveTodoInput!) {
  removeTodo(removeTodoInput: $removeTodoInput) {
    todo {
      id
      title
    }
  }
}
    `;
export type RemoveTodoMutationFn = Apollo.MutationFunction<RemoveTodoMutation, RemoveTodoMutationVariables>;

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      removeTodoInput: // value for 'removeTodoInput'
 *   },
 * });
 */
export function useRemoveTodoMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTodoMutation, RemoveTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(RemoveTodoDocument, options);
      }
export type RemoveTodoMutationHookResult = ReturnType<typeof useRemoveTodoMutation>;
export type RemoveTodoMutationResult = Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<RemoveTodoMutation, RemoveTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
  updateTodo(updateTodoInput: $updateTodoInput) {
    todo {
      id
      title
      isCompleted
      updatedAt
      createdAt
    }
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      updateTodoInput: // value for 'updateTodoInput'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const TodosDocument = gql`
    query Todos {
  getTodos {
    todos {
      id
      title
      isCompleted
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;