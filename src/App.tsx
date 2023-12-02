import { HomePage } from "./pages/HomePage";
import { PageLayout } from "./layout/PageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
