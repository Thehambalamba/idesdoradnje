import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "./core/core.module";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { Routes, RouterModule } from "@angular/router";
import { ItemDetailsComponent } from './shopping-list/item-details/item-details.component';

const appRoutes: Routes = [
  { path: "log-in", component: LoginComponent },
  { path: "shopping-list", component: ShoppingListComponent },
  {
    path: "",
    redirectTo: "/log-in",
    pathMatch: "full"
  },
  { path: "**", component: LoginComponent }
];
@NgModule({
  declarations: [AppComponent, LoginComponent, ShoppingListComponent, ItemDetailsComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
