import { Component  } from '@angular/core';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
 


@Component({

  selector: 'app-home',
  standalone: true,
  imports: [MenuSuperiorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
