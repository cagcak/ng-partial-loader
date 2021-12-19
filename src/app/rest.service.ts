import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestService {
  constructor(private http: HttpClient) {}

  private get options() {
    return {
      'Content-Type': 'application/json; charset=utf-8',
    };
  }

  getDepartments<T = any>() {
    return this.http.get<T>('departments', { headers: this.options });
  }

  getEmployees<T = any>() {
    return this.http.get<T>('employees', { headers: this.options });
  }

  getPlaces<T = any>() {
    return this.http.get<T>('places', { headers: this.options });
  }

  getAll() {
    const observables = [
      this.getDepartments(),
      this.getEmployees(),
      this.getPlaces(),
    ];

    return forkJoin(observables).pipe(
      take(1),
      map(([departments, employees, places]) => ({
        departments,
        employees,
        places,
      }))
    );
  }
}
