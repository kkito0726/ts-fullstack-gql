import { useTodosQuery } from "./__generated__/graphql";

function App() {
  const { data } = useTodosQuery();
  return (
    <div className="App">
      {data?.getTodos?.todos.map((item: any) => (
        <p key={item.id}>
          {item.title} {item?.createdAt.toISOString()}
        </p>
      ))}
    </div>
  );
}

export default App;
