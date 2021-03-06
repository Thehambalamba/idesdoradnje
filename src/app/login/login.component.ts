import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  logIn(e) {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.router.navigate(["shopping-list"]);
    }
  }
}
