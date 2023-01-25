import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any;
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response)=>{
       this.users=response;
      
       
    })
  }
  removeUser(userId:number){
    this.userService.delete(userId).subscribe((response)=>{
     this.users=this.users.filter((user:any)=>user.id!=userId);
    })
  }
}
