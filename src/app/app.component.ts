import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay } from 'rxjs';
import { Employee, KeyVal } from './app.model';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'partial-loader';

  constructor(private restService: RestService) {}

  departments$ = this.restService.getDepartments<KeyVal[]>().pipe(delay(1000));

  employees$ = this.restService.getEmployees<Employee[]>().pipe(delay(3000));

  places$ = this.restService.getPlaces<KeyVal[]>().pipe(delay(5000));
}
