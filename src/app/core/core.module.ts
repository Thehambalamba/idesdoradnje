import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [AuthService],
  imports: [CommonModule],
  exports: [AuthService]
})
export class CoreModule {}
