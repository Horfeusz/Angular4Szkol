import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Home2Component} from './home2/home2.component';
import {ContactComponent} from './contact/contact.component';
import {Page404Component} from './page404/page404.component';
import {SearchComponent} from './tv/search/search.component';
import {ShowDetailsComponent} from './tv/show-details/show-details.component';
import {ShowDetailsResolver} from './tv/show-details/show-details.resolver';
import {LoggedInGuard} from './guards/logged-in.guard';

/**
 * Moduł rutingu
 */
export interface ShowDetailsParams {
  id: string;
}

const appRoutes: Routes = [
    {path: '', component: Home2Component},
    {path: 'contact', component: ContactComponent},
    {path: 'tv', component: SearchComponent},
    {
      path: 'tv/:id',
      component: ShowDetailsComponent,
      // Jakie dane routing musi załatwić przed wyświetleniem komponentu
      // używamy do tego osobnego resolwera
      resolve: {
        show: ShowDetailsResolver
      },
      canActivate: [
        LoggedInGuard
      ],
      data: {
        roles: ['admin', 'editor']
      }
    },
    {path: '**', component: Page404Component}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: [
    ShowDetailsResolver,
    LoggedInGuard
  ]
})
export class AppRoutingModule {
}
