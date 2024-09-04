import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetTableComponent } from "./get-table/get-table.component";
import { LoginformComponent } from "./loginform/loginform.component";
import { VehicleDataComponent } from "./vehicle-data/vehicle-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetTableComponent, LoginformComponent, VehicleDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table';
}
