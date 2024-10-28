import { ErrorComponent, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { dataProvider } from "@refinedev/supabase";
import routerProvider, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,

} from "react-router-dom";
import { Toaster } from "react-hot-toast";
/* import { VideoClubLayout } from "@/components/layout";
 import { supabaseClient } from "@/supabase-client";
/* import {
  VideoClubMemberPageEdit,
  VideoClubMemberPageCreate,
  VideoClubMemberPageList,
  VideoClubMemberPageShow,
  PelisAppPageBrowsePelis,
  VideoClubPageCreateTitle,
  VideoClubPageShowTitle,
  VideoClubPageTapeRent,
  VideoClubPageTapeReturn,
  VideoClubPageTapeSelectMember,
  VideoClubReportPage,
  VideoClubSettingsPage,
} from "@/routes/video-club"; */
/* import {
  RVCWebsiteCatalogPage,
  RVCWebsitePageHome,
  RVCWebsitePageTitleDetails,
} from "@/routes/rvc-website"; */
/* import { authProvider } from "@/providers/auth-provider";
 */

import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";
import { ThemeProvider } from "./providers/theme-provider";
import { notificationProvider } from "./providers/theme-provider/notification-provider";
import { CommonLayout } from "./components/layout/common";
import { HomePage } from "./routes/home-page";
import { supabaseClient } from "./supabase-client";
import { LayoutPelisApp } from "./components/layout/90s-app";
import { PelisAppPageBrowsePelis } from "./routes/pelis-app/peliculas/list";
import authProvider from "./authProvider";
import { PelisAppPageVoto } from "./routes/pelis-app/votos/create";
import { LoginPage } from "./routes/login-page";
import { SignUpPage } from "./routes/signup-page";
import { PelisAppPageRankingPelis } from "./routes/pelis-app/peliculas/ranking";
import { AboutWindow } from "./components/about-window";
import { PaginaWebPageHome } from "./routes/pagina-web";
import { AboutWindowHome } from "./components/contact-window";

dayjs.extend(durationPlugin);

const App = () => {
  return (
    <DevtoolsProvider>
      <BrowserRouter>
        <ThemeProvider>

          <Refine
            dataProvider={dataProvider(supabaseClient)}
            /* liveProvider={liveProvider(supabaseClient)} */
            authProvider={authProvider}
            routerProvider={routerProvider}
            notificationProvider={notificationProvider}
            resources={[
              {
                name: "peliculas",
                list: "/app/peliculas",
                show: "/app/peliculas/:id",


              }
            ]}
            options={{
              liveMode: "auto",
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <Routes>
              <Route
                element={
                  <CommonLayout>
                    <Outlet />
                    <AboutWindowHome />
                    <AboutWindow />
                  </CommonLayout>

                } >
                <Route index element={<HomePage />} />
                <Route
                  path="/app"
                  element={
                    <LayoutPelisApp >
                      <Outlet />
                      <AboutWindow />
                    </LayoutPelisApp>
                  }
                >
                  <Route
                    path="peliculas"
                    element={
                      <>
                        <PelisAppPageBrowsePelis />
                        <Outlet />
                      </>
                    }
                  >
                    <Route index />
                    <Route path=":id" element={<PelisAppPageVoto />} />
                  </Route>
                  <Route path="ranking" element={<PelisAppPageRankingPelis />} />
                </Route>
                {/* //si está logueado y no hay una ruta se envía a la página de error */}
                <Route path="pagina-web" element={<Outlet />} >
                  <Route index element={<PaginaWebPageHome />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
            <Toaster />
          </Refine>

        </ThemeProvider>
        {/*         <DevtoolsPanel />
 */}      </BrowserRouter>
    </DevtoolsProvider >
  );
};

export default App;