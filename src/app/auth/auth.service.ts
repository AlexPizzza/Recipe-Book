import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private readonly http: HttpClient) {}

    signup(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACzZH2hkI2PUkHmCkO-Kj7DVTUYXG3Khk", {
            email,
            password,
            returnSecureToken: true
        });
    }
}