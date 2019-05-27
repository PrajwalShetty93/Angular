import { Component, OnInit } from '@angular/core';
import { UserDetailsServiceService } from '../service/data/user-details-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../todos/todos.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    id: number = -1;
    detail: User ;
    isAddOption: boolean;

    constructor(private userDetailsService: UserDetailsServiceService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['compId'];
        if(this.id!=-1){
        this.userDetailsService.findById(this.id).subscribe(
            response => this.handleUpdate(response)
        )
    }
    else
    {
        this.detail=new User(this.id,'a',123,'a');

    }
    }

    handleUpdate(response: User) {
        this.detail = response;
    }

    updateDetails() {
        if (this.id == -1) {
            console.log(this.detail)
            this.userDetailsService.insertDetail(this.detail).subscribe();
        }
        else {
             console.log(this.detail)
            this.userDetailsService.updateUser(this.detail, this.id).subscribe();
        }
        this.router.navigate(['todos']);


    }
}
