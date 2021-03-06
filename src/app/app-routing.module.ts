import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () =>
      import("./welcom-page/welcom-page.module").then(
        m => m.WelcomPagePageModule
      )
  },
  {
    path: "admin-dashboard",
    loadChildren: () =>
      import("./pages/admin-pages/admin-dashboard/admin-dashboard.module").then(
        m => m.AdminDashboardPageModule
      )
  },

  {
    path: "welcom-page",
    loadChildren: () =>
      import("./welcom-page/welcom-page.module").then(
        m => m.WelcomPagePageModule
      )
  },
  {
    path: "respondant-login",
    loadChildren: () =>
      import("./pages/respondant-pages/respondant-login/respondant-login.module").then(
        m => m.RespondantLoginPageModule
      )
  },

  {
    path: "respondant-dashboard",
    loadChildren: () =>
      import("./pages/respondant-pages/respondant-dashboard/respondant-dashboard.module").then(
        m => m.RespondantDashboardPageModule
      )
  },
  {
    path: "admin-sign-up",
    loadChildren: () =>
      import("./pages/admin-pages/admin-sign-up/admin-sign-up.module").then(
        m => m.AdminSignUpPageModule
      )
  },
  {
    path: "admin-login",
    loadChildren: () =>
      import("./pages/admin-pages/admin-login/admin-login.module").then(
        m => m.AdminLoginPageModule
      )
  },
  {
    path: "admin-add-respondant",
    loadChildren: () =>
      import("./pages/admin-pages/admin-add-respondant/admin-add-respondant.module").then(
        m => m.AdminAddRespondantPageModule
      )
  },
  {
    path: "admin-add-unit",
    loadChildren: () =>
      import("./pages/admin-pages/admin-add-unit/admin-add-unit.module").then(
        m => m.AdminAddUnitPageModule
      )
  },
  {
    path: "splash-page",
    loadChildren: () =>
      import("./splash-page/splash-page.module").then(
        m => m.SplashPagePageModule
      )
  },
  {
    path: "view-dangers",
    loadChildren: () =>
      import("./pages/victim-pages/view-dangers/view-dangers.module").then(
        m => m.ViewDangersPageModule
      )
  },
  {
    path: "get-help",
    loadChildren: () =>
      import("./pages/victim-pages/get-help/get-help.module").then(
        m => m.GetHelpPageModule
      )
  },
  {
    path: "user-welcome",
    loadChildren: () =>
      import("./pages/victim-pages/user-welcome/user-welcome.module").then(
        m => m.UserWelcomePageModule
      )
  },
  {
    path: "find-unit",
    loadChildren: () =>
      import("./pages/victim-pages/find-unit/find-unit.module").then(
        m => m.FindUnitPageModule
      )
  },
  {
    path: "unit-alert",
    loadChildren: () =>
      import("./pages/victim-pages/unit-alert/unit-alert.module").then(
        m => m.UnitAlertPageModule
      )
  },
  {
    path: "view-unit",
    loadChildren: () =>
      import("./pages/victim-pages/view-unit/view-unit.module").then(
        m => m.ViewUnitPageModule
      )
  },
  {
    path: "view-emergencies",
    loadChildren: () =>
      import("./pages/respondant-pages/view-emergencies/view-emergencies.module").then(
        m => m.ViewEmergenciesPageModule
      )
  },
  // {
  //   path: 'emergency-details',
  //   loadChildren: () => import('./pages/respondant-pages/emergency-details/emergency-details.module').then( m => m.EmergencyDetailsPageModule)
  // },
  {
    path: "user-location",
    loadChildren: () =>
      import("./pages/victim-pages/user-location/user-location.module").then(
        m => m.UserLocationPageModule
      )
  },
  {
    path: "victim-confirm-loc-on-map",
    loadChildren: () =>
      import("./pages/victim-pages/victim-confirm-loc-on-map/victim-confirm-loc-on-map.module").then(
        m => m.VictimConfirmLocOnMapPageModule
      )
  },
  {
    path: "admin-add-danger",
    loadChildren: () =>
      import("./pages/admin-pages/admin-add-danger/admin-add-danger.module").then(
        m => m.AdminAddDangerPageModule
      )
  },
  {
    path: "admin-verify-danger-map",
    loadChildren: () =>
      import("./pages/admin-pages/admin-verify-danger-map/admin-verify-danger-map.module").then(
        m => m.AdminVerifyDangerMapPageModule
      )
  },
  {
    path: "admin-edit-unit",
    loadChildren: () =>
      import("./pages/admin-pages/admin-edit-unit/admin-edit-unit.module").then(
        m => m.AdminEditUnitPageModule
      )
  },
  {
    path: "view-respondant-list",
    loadChildren: () =>
      import("./pages/admin-pages/view-respondant-list/view-respondant-list.module").then(
        m => m.ViewRespondantListPageModule
      )
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
{
}
