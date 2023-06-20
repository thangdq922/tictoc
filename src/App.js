import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicR, errorR, privateR } from "./route/index";
import {DefaultLayout, User} from "./layouts";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
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
