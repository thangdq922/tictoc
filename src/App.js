import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";

import { publicR, errorR, privateR } from "./route/index";
import Loader from "./component/Loader/Loader";
import config from "./config";
import ModalVideo from "./pages/Default/ModalVideo";
import { getUser } from "./hooks/auth/user.localstore";
import { ProtectedRoute } from "./component/ProtectedRoute";


function App() {
  const location = useLocation();
  const videoDetail = location.state && location.state.videoDetail;
  const userCurrent = getUser()?.data

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
                  <ProtectedRoute user={userCurrent}>
                  <Page />
                  </ProtectedRoute>
                </Layout>
              }
            />
          );
        })}

        {errorR.map((route, index) => {
          const Page = route.component
          let Layout = route.layout;
          return <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />
        })}

      </Routes>
      {videoDetail && (
        <Routes>
          <Route exact path={config.video} element={<ModalVideo />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
