import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_form: FormGroup
  constructor(private form_builder: FormBuilder, private login_service: LoginService, private router: Router) {
    this.login_form = this.form_builder.group({
      nome: '',
      senha: ''
    })
   }

  ngOnInit(): void {
  }

  fazer_login(){
    const { nome, senha } = this.login_form.getRawValue();

    this.login_service.create_session(nome, senha).subscribe(
      ( data: any) => {
        console.log(data);
        localStorage.setItem('JWT', data.token);
        localStorage.setItem('user_id', data.user.id);
        this.router.navigate(['events']);
      },
      (error) => {
        alert(error);
      }
    );
  }

}
