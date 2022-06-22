import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service'
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register_form: FormGroup;
  constructor(private form_buider: FormBuilder, private user_service: UserService, private router:Router) {
    this.register_form = this.form_buider.group({
      nome: '',
      senha: ''
    })
  }

  ngOnInit(): void {
  }

  criar_usuario() {
    const { nome, senha } = this.register_form.getRawValue();
    this.user_service.create_register(nome, senha).subscribe();
    this.router.navigate(['/']);
  }
}
