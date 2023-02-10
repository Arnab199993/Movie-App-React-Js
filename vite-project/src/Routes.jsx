import App from "./App";
import Info from "./Components/Info"
const Router = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "info",
        element: <Info />
    },
]
export default Router