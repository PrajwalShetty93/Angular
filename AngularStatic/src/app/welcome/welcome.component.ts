import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService, Message } from '../service/data/welcomedata.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    message = 'Welcome Message';
    userName = '';
    message1: string;
    errorMsg: string;

    constructor(private route: ActivatedRoute, private welcomeService: WelcomedataService) { }

    ngOnInit() {
        this.userName = this.route.snapshot.params["name"];
        this.message = 'Welcome Component';
    }

    getCustomizedMessage() {
       // console.log(this.welcomeService.executeHelloWorldBeanService());
        this.welcomeService.executeHelloWorldBeanService().subscribe(
            response => this.saveResponse(response),
            error => this.handleError(error)
        );
    }

    getCustomizedPathMessage() {
     this.welcomeService.executeHelloWorldWithName(this.userName).subscribe(
            response => this.saveResponse(response),
            error => this.handleError(error)
        );
    }



    saveResponse(response: Message) {
        this.message1 = response.message;
    }

    handleError(error) {
        this.errorMsg=error.message;
    }
}
