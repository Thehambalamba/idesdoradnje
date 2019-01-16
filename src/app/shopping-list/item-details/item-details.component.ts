import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.scss"]
})
export class ItemDetailsComponent implements OnInit, OnChanges {
  @Input() showDetails: boolean;
  @Input() selectedItem: any;
  @Output() hideDetails = new EventEmitter<boolean>();
  itemDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.itemDetailsForm = this.fb.group({
      title: [
        { value: this.selectedItem.title, disabled: true },
        Validators.required
      ]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedItem = changes.selectedItem.currentValue;
    if (this.itemDetailsForm)
      this.itemDetailsForm.controls.title.patchValue(this.selectedItem.title);
  }

  closeDetails() {
    this.hideDetails.emit(false);
  }

  saveDetails() {}
}
