import { Suspense } from "react";
import useFetch from "./hooks/useFetchs";
import { fetchData } from "./services/fetchData";


const apiData = fetchData("");
console.log(apiData)

function App() {
  const data = apiData.read();

  return (
    <div className="App">
      <h1>Fetch like a Pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
export default App;