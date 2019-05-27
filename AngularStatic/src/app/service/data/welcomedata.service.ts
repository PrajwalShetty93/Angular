import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WelcomedataService {

    constructor(private http: HttpClient) { }

    executeHelloWorldBeanService() {
        return this.http.get<Message>('http://localhost:8080/hello');
    }

    executeHelloWorldWithName(name: string)
    {
        return this.http.get<Message>('http://localhost:8080/hello/'+ name);
    }
}

export class Message {
    constructor(public message: string) { }
}
