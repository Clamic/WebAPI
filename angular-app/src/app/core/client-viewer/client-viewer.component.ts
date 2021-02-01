import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Client } from 'src/app/shared/types';

@Component({
  selector: 'app-client-viewer',
  templateUrl: './client-viewer.component.html',
  styleUrls: ['./client-viewer.component.scss'],
  providers: [ApiService]
})
export class ClientViewerComponent{

  clientData: Client[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getClients().pipe(
        map((clients: any) => {
          clients.forEach((client: any) => {
            client['active'] = false;
          });
          return clients;
        })
      ).subscribe(clients => {
        this.clientData = clients;
      });
  }

  addClientToTable() {
    this.clientData.push({
      ClientId: undefined,
      FirstName: '',
      Surname: '',
      DateOfBirth: new Date(),
      Address: '',
      Suburb: '',
      State: '',
      PostCode: '',
      Telephone: '',
      active: true
    });
  }

  editClient(client: any) {
    if(client.ClientId !== undefined) {
      this.apiService.updateClientTable(client).subscribe();
    } else {
      this.apiService.addClient(client).subscribe();
    }
  }

  /*
    this.clientForm = this.fb.group({
      ClientId: ['', Validators.required],
      FirstName: ['', Validators.required],
      Surname: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
      Address: ['', Validators.required],
      Suburb: ['', Validators.required],
      State: ['', Validators.required],
      PostCode: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      Telephone: ['', [Validators.maxLength(15), Validators.minLength(9)]]
    });
  */

}
