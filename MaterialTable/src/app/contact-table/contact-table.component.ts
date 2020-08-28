import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import { MatTableDataSource } from '@angular/material/table';
import { IContact } from '../Interface/IContact';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
  dataSource: MatTableDataSource<IContact>;
  displayedColumns: string [] = ['FirstName', 'LastName', 'Address', 'PhoneNumber'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.contactService.getContacts());
    this.dataSource.sort = this.sort;
  }

  applyfilter(filtervalue: string){
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }

}
