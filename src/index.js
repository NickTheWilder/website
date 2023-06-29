import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.module.css";
import App from "./App";
import Loading from "./loading/loading";

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<App />} />
                    <Route path="loading" element={<Loading />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
