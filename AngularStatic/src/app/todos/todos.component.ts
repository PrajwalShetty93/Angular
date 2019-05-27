import { Component, OnInit } from '@angular/core';
import { UserDetailsServiceService } from '../service/data/user-details-service.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    details : User[];
    constructor(private userDetailsService: UserDetailsServiceService, private router: Router) { }

    ngOnInit() {
        this.getAllUserDetails();
    }

    getAllUserDetails() {

        this.userDetailsService.getAllUsers().subscribe(
            response => this.details = response);
    }

    deleteDetail(compId)
    {
        this.userDetailsService.deleteDetail(compId).subscribe(
            response=> this.handleDelete(response)
        );
    }

    updateDetail(compId)
    {
        this.router.navigate(["update",compId]);
        
    }

    addDetail()
    {
        this.router.navigate(['update',-1]);
    }

    handleDelete(response)
    {
        this.getAllUserDetails()
    }
}

export class User {
    compId:number;
    name: string;
    contact: number;
    address: string;

    constructor(compId,name,contact,address)
    {

    }
}
