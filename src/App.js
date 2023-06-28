import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";

import { publicR, errorR, privateR } from "./route/index";
import Loader from "./component/Loader/Loader";
import config from "./config";
import ModalVideo from "./pages/Default/ModalVideo";






function App() {
  const location = useLocation();
  const videoDetail = location.state && location.state.videoDetail;
  // const { user } = useSelector((state) => state.user);

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
          let Layout = route.layout;
          return <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />
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
