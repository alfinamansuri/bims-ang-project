import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CustmizedModalComponent } from 'src/app/shared/model/custmized-modal/custmized-modal.component';


interface Food {
  value: string;
  viewValue: string;
}


export interface Element {
  Company_Name: string;
  Primary_Contact: string;
  Primary_Address: string;
  Category: string;
}

const ELEMENT_DATA: Element[] = [
  {Company_Name: 'Walters and Vang Inc', 
  Primary_Contact: 'Cameran Back rugogo@mailinator.com +1 (549) 928-9192 x11', 
  Primary_Address: 'Test - 2225 Macleod Trail SE Erlton, Calgary, AB, T2G 5B6', 
  Category: 'Customer'
},
{Company_Name: 'Faulkner and Moses LLC', 
  Primary_Contact: 'Courtney Benson walerozicu@mailinator.com +1 (379) 793-6468 x4', 
  Primary_Address: 'Xavier Wiley -1 World Way #unit1, Los Angeles, CA, 90045', 
  Category: 'Customer'
},
{Company_Name: 'Faulkner and Moses LLC', 
  Primary_Contact: 'Courtney Benson walerozicu@mailinator.com +1 (379) 793-6468 x4', 
  Primary_Address: 'Xavier Wiley -1 World Way #unit1, Los Angeles, CA, 90045', 
  Category: 'Customer'
},
{Company_Name: 'Faulkner and Moses LLC', 
Primary_Contact: 'Courtney Benson walerozicu@mailinator.com +1 (379) 793-6468 x4', 
Primary_Address: 'Xavier Wiley -1 World Way #unit1, Los Angeles, CA, 90045', 
Category: 'Customer'
},
  
];

@Component({
  selector: 'app-lsp-dashboard',
  templateUrl: './lsp-dashboard.component.html',
  styleUrls: ['./lsp-dashboard.component.scss']

})


export class LspDashboardComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  displayedColumns: string[] = ['Company_Name', 'Primary_Contact', 'Primary_Address', 'Category'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(CustmizedModalComponent);
}
}

