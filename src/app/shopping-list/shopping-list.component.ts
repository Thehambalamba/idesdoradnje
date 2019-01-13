import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  list = [
    { title: "Mleko", quantity: 2 },
    { title: "Hleb", quantity: 1 },
    { title: "Dunhil", quantity: 6 },
    { title: "Salama", quantity: 1 },
    { title: "Pljeskavica", quantity: 1 },
    { title: "Luk", quantity: 1 },
    { title: "Zito", quantity: 1 }
  ];
  constructor() {}

  ngOnInit() {}

  showItemDetails(index) {
    console.log(index);
  }
}
