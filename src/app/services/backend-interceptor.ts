import { Injectable, Injector } from "@angular/core";
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, delay, dematerialize, materialize, mergeMap, of, throwError } from "rxjs";

// array in local storage for registered patients
let patients = [
    {
    "prenom":"Thierry",
    "nom":"Dupond",
    "dateDeNaissance":"21/06/1986"
    }
];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute():Observable<any> {
            switch (true) {
                case url.endsWith('/GetPatients') && method === 'POST':
                    return getPatients();
                // case url.match(/\/patients\/\d+$/) && method === 'GET':
                //     return getUserById();
                // case url.match(/\/patients\/\d+$/) && method === 'PUT':
                //     return updateUser();
                // case url.match(/\/patients\/\d+$/) && method === 'DELETE':
                //     return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function getPatients() {
            
            return ok(patients);
        }


        // helper functions

        function ok(body?: { prenom: string; nom: string; dateDeNaissance: string; }[]) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message: any) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};

function authenticate() {
    throw new Error("Function not implemented.");
}


function register() {
    throw new Error("Function not implemented.");
}


function getUserById() {
    throw new Error("Function not implemented.");
}


function updateUser() {
    throw new Error("Function not implemented.");
}


function deleteUser() {
    throw new Error("Function not implemented.");
}
