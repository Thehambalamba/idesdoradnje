import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-activate",
  templateUrl: "./activate.component.html",
  styleUrls: ["./activate.component.scss"]
})
export class ActivateComponent implements OnInit {
  activateForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.activateForm = this.fb.group({
      activationCode: ["", Validators.required]
    });
  }

  ngOnInit() {}

  activateAccount(e) {}
}
