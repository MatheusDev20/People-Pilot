
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Provider } from "./providers";

function App() {
  return  <Provider>
            <RouterProvider router={router} />
          </Provider>
}

export default App
