import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component'
import { ShopComponent } from './shop/shop.component'


const APP_ROUTES: Routes = [
{path: '', redirectTo: '/shop', pathMatch: 'full' },
{path: 'shop', component: ShopComponent},
{path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);