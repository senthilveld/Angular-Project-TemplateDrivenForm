import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  itHasError = true;
  submitted = false;
  topics = ['Angular','React','Vue'];
  userModel = new User('','rob@test.com',55555,'default','morning',true);
  errorMessage ='';

  constructor(private _enrollmentService:EnrollmentService){

  }

  validate(val:any){
    if(val === 'default'){
       this.itHasError = true;
    }
    else{
      this.itHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(data=>console.log(data ,"success"),
    error=>this.errorMessage = error.statusText
    // error=>console.log(error,error.statusText ,"errorcheck")
    )
  }

 
}
