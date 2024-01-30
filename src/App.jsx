import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import WithoutReactQuery from "./components/WithoutReactQuery";
import WithReactQuery from "./components/WithReactQuery";
import ReactQueryRefetch from "./components/ReactQueryRefetch.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactQueryMutation from "./components/ReactQueryMutation.jsx";

const queryClient = new QueryClient({});
function App() {
  return (
    <div className="w-5/6 mx-auto my-0">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          <Route path="/" element={<WithoutReactQuery />} />
          <Route path="/query" element={<WithReactQuery />} />
          <Route path="/queryCount" element={<ReactQueryRefetch />} />
          <Route path="/mutation" element={<ReactQueryMutation />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
