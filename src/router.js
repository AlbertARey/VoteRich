import { createRouter, createWebHashHistory } from "vue-router";
// import { useToast } from "vue-toastification";
// import toastProperties from './utilities/toastProperties'
// import Login from "./views/LoginView";
import HomeView from "@/views/HomeView.vue";
// import GestionUsuarios from "./views/GestionUsuariosView";
import GestionPerfiles from "@/views/GestionPerfilesView.vue";
// import DocumentosObsoletos from "./views/DocumentosObsoletosView";
// import CarpetasComponent from "./components/CarpetasComponent";
// import api from "./utilities/api";
// import store from "./store";
// import NProgress from "nprogress";

const routes = [
  // {
  //   path: "/Login",
  //   name: "Login",
  //   component: Login,
  // },
  {
    path: "/",
    name: "Inicio",
    component: HomeView,
  },
  {
    path: "/RegistroVoto",
    name: "Registro Voto",
    component: GestionPerfiles,
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// const toast = useToast();

// router.beforeEach(async (to, from) => {
//   console.log(to, from);

//   if (to == from) {
//     return false;
//   }

//   NProgress.remove();
//   let authenticated = await isAuthenticated(to);
//   document.title = "Gestor de Archivos - " + to.name;

//   if (!authenticated && to.name != "Login") {
//     document.title = "Gestor de Archivos — Iniciar sesión";
//     return { name: "Login" };
//   }
//   if (authenticated && (!hasAccess(to) && to.name != "Inicio")) {
//     toast.warning("No está autorizado", toastProperties);
//     return { name: from.name };
//   }
//   NProgress.configure({ parent: ".wrapper" });
// });

// function hasAccess(to) {
//   const userViews = store.getters.getUserViews; // Obtén las vistas del usuario desde el store
//   const toName = to.name;
//   const hasAccess = userViews.some((view) => view.nombre == toName); // Comprueba si el usuario tiene acceso a la vista

//   if (hasAccess) {
//     return true;
//   } else {
//     return false;
//   }
// }

// async function isAuthenticated() {
//   if (localStorage.getItem("token") != null) {
//     try {
//       const response = await api.get("/api/Account/GetUserData");
//       if (response.data.usuario.idUsuario) {
//         return true;
//       } else {
//         localStorage.removeItem("token");
//         return false;
//       }
//     } catch (error) {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

export default router;
