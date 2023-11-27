import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Root } from "./routes/Root";
import { NewsList } from "./Components/NewsList/NewsList";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="" element={<Root />}>
            <Route path="/news" element={<NewsList />} />
            {/* <Route path="news/:id" element={<NewsPage />} /> */}
            {/* <Route path='news/' element={<MainPage />} />
            <Route path='*' element={<ErrorPage />} /> */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
