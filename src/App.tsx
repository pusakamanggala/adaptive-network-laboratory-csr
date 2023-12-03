import { HomePage } from "./pages/HomePage";
import { PageLayout } from "./layout/PageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { PageNotFound } from "./pages/PageNotFound";

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
        <Route
          path="/about/profile"
          element={
            <PageLayout>
              <Profile />
            </PageLayout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
