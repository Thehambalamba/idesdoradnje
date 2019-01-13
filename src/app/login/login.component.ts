import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  logIn(e) {
    if (this.loginForm.dirty && this.loginForm.valid) {
      console.log(e);
    }
  }
}