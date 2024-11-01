import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/admin-page/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UserManagementComponent } from './pages/admin-page/user-management/user-management.component';
import { AgencyManagementComponent } from './pages/admin-page/agency-management/agency-management.component';
import { ServiceManagementComponent } from './pages/admin-page/service-management/service-management.component';
import { CategoryManagementComponent } from './pages/admin-page/category-management/category-management.component';
import { DashboardLayoutComponent } from './pages/admin-page/dashboard-layout/dashboard-layout.component';
import { RoleManagementComponent } from './pages/admin-page/role-management/role-management.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { SpecificServiceComponent } from './pages/landing-page/components/specific-service/specific-service.component';
import { ServicePhotosComponent } from './pages/landing-page/components/service-photos/service-photos.component';
import { AgencyProfileComponent } from './pages/landing-page/components/agency-profile/agency-profile.component';

export const routes: Routes = [

    {path:'', redirectTo:'Welcome', pathMatch:'full'},

    {path:'Welcome', component:LandingPageComponent},

    {path:'login', component:LoginComponent},

    {path:'register', component:RegisterComponent},

    {path:'forgot-password', component:ForgotPasswordComponent},

    {path:'service/id', component:SpecificServiceComponent},

    {path:'service-photos', component:ServicePhotosComponent},

    {path:'agency-profile', component:AgencyProfileComponent},

    {
        path:'dashboard', 
        component:DashboardLayoutComponent,
        children:[
            {path:'', component:DashboardComponent},
            {path:'user-management', component:UserManagementComponent},
            {path:'agency-management', component:AgencyManagementComponent},
            {path:'service-management', component:ServiceManagementComponent},
            {path:'category-management', component:CategoryManagementComponent},
            {path:'role-management', component:RoleManagementComponent},
            {path:'profile', component:ProfileComponent}
        ]
    },
    
    {path:'**', component:PageNotFoundComponent}
];
