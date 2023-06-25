import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { publicR, errorR, privateR } from "./route/index";
import Loader from "./component/Loader/Loader";
import config from "./config";





function App() {
  return (
  
    <Suspense fallback={<Loader />}>
      <Routes location={videoDetail || location}>
        {publicR.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {privateR.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout;

          return (
            <Route
              path={route.path}
              key={index}
              element={
                <Layout>
                  {/* <ProtectedRoute user={user}> */}
                  <Page />
                  {/* </ProtectedRoute> */}
                </Layout>
              }
            />
          );
        })}

        {errorR.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />} />
        })}

      </Routes>
      {videoDetail && (
        <Routes>
          <Route exact path={config.routesPublic.video} element={<ModalVideo />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
