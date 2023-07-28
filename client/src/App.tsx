import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QuotePage } from "./pages/QuotePage";
import { QuoteFormPage } from "./pages/QuoteFormPage";
import { HeroTitle } from "./components/HeroTitle";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto">
        <HeroTitle />
        <Routes>
          <Route path="/" element={<Navigate to={"/quotes"} />} />
          <Route path="/quotes" element={<QuotePage />} />
          <Route path="/quotes-create" element={<QuoteFormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
