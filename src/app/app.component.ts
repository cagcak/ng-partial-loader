import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mapTo, Observable, take, timer } from 'rxjs';

interface KeyVal {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'partial-loader';

  departments$: Observable<KeyVal[]> = timer(1000).pipe(
    mapTo([
      { id: 1, name: 'Development' },
      { id: 2, name: 'Product' },
      { id: 3, name: 'Growth' },
      { id: 4, name: 'Marketing' },
    ]),
    take(1)
  );

  employees$: Observable<KeyVal[]> = timer(2500).pipe(
    mapTo([
      { id: 978543, name: 'Tonyakuk' },
      { id: 243534, name: 'Tuğrul' },
      { id: 982324, name: 'Çağrı' },
      { id: 645664, name: 'Alparslan' },
      { id: 312398, name: 'Atilla' },
    ]),
    take(1)
  );

  places$: Observable<KeyVal[]> = timer(3000).pipe(
    mapTo([
      { id: 1, name: 'İstanbul' },
      { id: 2, name: 'Ankara' },
      { id: 3, name: 'İzmir' },
    ]),
    take(1)
  );
}
