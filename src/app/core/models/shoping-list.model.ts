export class ShoppingListModel {
  public shoppingList: ShoppingItem[];
}

export class ShoppingItem {
  public id: number;
  public title: string;
  public dateCreated: Date;
  public dateCompleted: Date;
  public status: boolean;
}
