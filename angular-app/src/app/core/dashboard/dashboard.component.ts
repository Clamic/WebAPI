import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ApiService]
})
export class DashboardComponent {

  invoiceView: Observable<any>;

  constructor(private apiService: ApiService, private router: Router) {
    this.invoiceView = this.apiService.getInvoiceView().pipe(
      map(invoiceArr => invoiceArr.sort((a, b) => a.InvoiceDate < b.InvoiceDate ? 1 : -1))
    );
   }

   navigateTo(path: string) {
     this.router.navigateByUrl(`/${path}`);
   }

}
