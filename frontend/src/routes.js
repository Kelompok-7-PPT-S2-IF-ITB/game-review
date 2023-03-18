/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";
import Dashboard from "features/dashboard/dashboard";
import ReviewGame from "features/games/reviewgame";
import ListGame from "features/games/listgames";
import LoginGame from "features/login/login";
import Registration from "features/registration/registration";
import Account from "features/account/account";
import AboutUs from "features/about-us/aboutus";
import VerificationEmail from "features/registration/verification-email";
import VerificationSuccsess from "features/registration/verification-success";
import SearchGame from "features/dashboard/search";

var routes = [
  {
    path: "/dashboard",
    name: "DASHBOARD",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/search-game",
    name: "SEARCH GAMES",
    icon: "ni ni-zoom-split-in text-black",
    component: SearchGame,
    layout: "/admin"
  },
  {
    path: "/list-game",
    name: "GAMES",
    icon: "ni ni-atom text-red",
    component: ListGame,
    layout: "/admin"
  },
  {
    path: "/review-game",
    name: "REVIEW GAME",
    icon: "ni ni-chart-pie-35 text-orange",
    component: ReviewGame,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "LOGIN",
    icon: "ni ni-key-25 text-info",
    component: LoginGame,
    layout: "/auth"
  },
  {
    path: "/registration",
    name: "REGISTRATION",
    icon: "ni ni-circle-08 text-pink",
    component: Registration,
    layout: "/auth-regis"
  },
  {
    path: "/verification-email",
    name: "VERIFICATION EMAIL",
    icon: "ni ni-active-40 text-cream",
    component: VerificationEmail,
    layout: "/auth"
  },
  {
    path: "/verification-success",
    name: "VERIFICATION SUCCESS",
    icon: "ni ni-check-bold text-blue",
    component: VerificationSuccsess,
    layout: "/auth"
  },
  {
    path: "/account",
    name: "ACCOUNT",
    icon: "ni ni-single-02 text-yellow",
    component: Account,
    layout: "/admin"
  },
  {
    path: "/about-us",
    name: "ABOUT US",
    icon: "ni ni-active-40 text-success",
    component: AboutUs,
    layout: "/admin"
  },
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
