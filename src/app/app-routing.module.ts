import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricePackageComponent } from './pages/price-package/price-package.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/:id', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'price-package', component: PricePackageComponent },
  { path: 'blog' , component:BlogComponent },
  { path: 'gallery', component: ServiceDetailComponent },
  // { path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) }, // future
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration:'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
