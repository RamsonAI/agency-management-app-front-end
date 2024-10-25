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

export const routes: Routes = [

    {path:'', redirectTo:'Welcome', pathMatch:'full'},

    {path:'Welcome', component:LandingPageComponent},

    {path:'login', component:LoginComponent},

    {path:'register', component:RegisterComponent},

    {path:'forgot-password', component:ForgotPasswordComponent},

    {
        path:'dashboard', 
        component:DashboardLayoutComponent,
        children:[
            {path:'', component:DashboardComponent},
            {path:'user-management', component:UserManagementComponent},
            {path:'agency-management', component:AgencyManagementComponent},
            {path:'service-management', component:ServiceManagementComponent},
            {path:'category-management', component:CategoryManagementComponent}
        ]
    },
    
    {path:'**', component:PageNotFoundComponent}
];
