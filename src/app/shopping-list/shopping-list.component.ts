import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  list = [
    { title: "Mleko", quantity: 2, completed: false },
    { title: "Hleb", quantity: 1, completed: true },
    { title: "Dunhil", quantity: 6, completed: false },
    { title: "Salama", quantity: 1, completed: false },
    { title: "Pljeskavica", quantity: 1, completed: false },
    { title: "Luk", quantity: 1, completed: false },
    { title: "Zito", quantity: 1, completed: false }
  ];

  showDetails: boolean;
  selectedItem: any;
  constructor() {}

  ngOnInit() {}

  showItemDetails(index) {
    this.selectedItem = this.list[index];
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
  }

  deleteItem(e, i) {
    e.stopPropagation();
    this.list.splice(i, 1);
  }

  completeItem(e, i) {
    e.stopPropagation();
    this.list[i].completed = true;
  }
}
