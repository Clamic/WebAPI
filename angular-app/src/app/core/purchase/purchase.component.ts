import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  providers: [ApiService]
})
export class PurchaseComponent {

  purchaseForm: FormGroup;
  purchasePending = false;
  clientData: Observable<any>;

  mockProducts = [
    {name: 'Oven', price: 505},
    {name: 'Microwave', price: 230},
    {name: 'Toaster', price: 100},
    {name: 'Fridge', price: 1430}
  ];

  constructor(private fb: FormBuilder, public apiService: ApiService, private router: Router) {
    this.purchaseForm = this.fb.group({
      clientId: ['', Validators.required],
      productAmount: ['', Validators.required],
      discount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });

    this.clientData = this.apiService.getClients().pipe(shareReplay(1));
  }

  buyProduct() {
    if(this.purchaseForm.valid) {
      this.purchasePending = true;

      const formValue = this.purchaseForm.value;
      let invoice: any = {
        ClientId: formValue.clientId,
        InvoiceNo: Math.floor((Math.random() * 10000) + 1),
        InvoiceAmount: formValue.productAmount - Math.floor(formValue.productAmount * (formValue.discount / 100))
      };

      this.apiService.insertNewInvoice(invoice).subscribe(() => {
        this.purchaseForm.reset();
        this.purchasePending = false;
        this.router.navigateByUrl('');
      });
    }
  }

}
