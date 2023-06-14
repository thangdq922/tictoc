import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layouts/Common/index";
import User from "./component/Layouts/User";
import { publicR, errorR, privateR } from "./route/routes";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {publicR.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Route>
        <Route path="/u" element={<User />}>
          {privateR.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Route>
        {errorR.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />} />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
