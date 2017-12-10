import {Component} from '@angular/core';
import {NavigationError, ResolveEnd, ResolveStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title = 'To będzie już kolejna apaka w Angular 4 tudzież 5!';

  isLoading = false;

  constructor(router: Router) {
    router.events.subscribe(event => {

      // To działa w zakresie nawigacji, jak np wyciągamy dane z jakiś zasobów przy przejściu jakąś strone

      if (event instanceof NavigationError) {
        // Tu możemy obsłużyć jakiegoś babola
      }

      if (event instanceof ResolveStart) {
        this.isLoading = true;
      } else if (event instanceof ResolveEnd) {
        this.isLoading = false;
      }
    });
  }

  clickHandler(event: MouseEvent) {
    console.log(event);
    this.title = 'Twoja pozycja x: ' + event.clientX + ',y ' + event.clientY;
  }


}
