import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-table.component.html',
  styleUrl: './get-table.component.scss',
})
export class GetTableComponent {

  tabledata:any;
  
  constructor(public http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
      this.tabledata = res.products; 

      console.log(this.tabledata);
    });
  }
}
