import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { MyAuthService } from '../my-auth.service';
import{WelcomeService}from '../welcome.service';
import{Book} from './../model/book';
//import {}from '../../'
import { filter, map, } from 'rxjs/operators';
import { pipe, range, timer, zip } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: any;
  data:Book[];
  

  constructor(private route: ActivatedRoute,
    private router: Router,private userIdle: UserIdleService,private _authService: MyAuthService, private welcomeServi: WelcomeService
   ) {this.user=this.route.snapshot.paramMap.get('id');
   console.log(this.user);
  }

  ngOnInit() {

    //this.welcomeServi.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(()=>{this.router.navigate(['logout']);console.log('time up');});

    
    this.welcomeServi.getData()
    .subscribe(data1=>this.data=data1);

    
  }

}
