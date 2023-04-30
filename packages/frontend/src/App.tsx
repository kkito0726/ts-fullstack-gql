/* eslint-disable react/react-in-jsx-scope */
import { useTodosQuery } from "./__generated__/graphql";
import { Button } from "./components/Elements/Button";
import { InputField } from "./components/Elements/InputField";

import { Layout } from "./components/Layout";
import { TodoItem } from "./components/TodoItem";

function App() {
  const { data } = useTodosQuery();
  return (
    <Layout>
      <div className="max-w-xl mx-auto p-7">
        <div className="bg-white p-6 rounded shadow">
          <form className="flex flex-col">
            <InputField
              className="flex flex-col mb-6"
              labelName="NEW Todo"
              placeholder="試薬の調製をする..."
            />
            <Button>Add Todo</Button>
          </form>
        </div>
        {data?.getTodos?.todos?.map((item) => (
          <TodoItem key={item?.id} todoItem={item!} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
