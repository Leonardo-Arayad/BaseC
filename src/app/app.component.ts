import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'hostApp';
  auth = inject(AuthService);

  constructor() {
    this.auth.userName = 'Leo';
  }

}
