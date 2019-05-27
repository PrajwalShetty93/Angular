import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/todos/todos.component';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsServiceService {

    constructor(private http: HttpClient) { }

    getAllUsers() { 
       return this.http.get<User[]>("http://localhost:8080/users");
    }

    deleteDetail(compId: number)
    {
        return this.http.delete<User>(`http://localhost:8080/users/${compId}`)
    }

    findById(compId:number)
    {
        return this.http.get<User>(`http://localhost:8080/users/${compId}`)
    }

    updateUser(detail : User,compId: number)
    {
        return this.http.put<User>(`http://localhost:8080/users/${compId}`,detail);
    }

    insertDetail(detail: User)
    {
        return this.http.post<User>('http://localhost:8080/users',detail);
    }
}
