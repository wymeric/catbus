import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor (private http: Http) {}

    getData<T>(url: string): Observable<T> {
        return new Observable (observer => {
            var headers = new Headers();
            this.http.get(url, {headers: headers}).toPromise()
            .then (response => {
                observer.next(response.json().results as T);
            });
        });
    }
}
