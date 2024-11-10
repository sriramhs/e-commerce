import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import "./styles/index.css";
import { store } from "./Redux/store.ts";
import { Provider } from "react-redux";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { routes } from "./Routes.tsx";
import MainLayout from "./MainLayout.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
