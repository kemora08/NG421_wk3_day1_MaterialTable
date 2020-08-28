import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import { MatTableDataSource } from '@angular/material/table';
import { IContact } from '../Interface/IContact';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
  dataSource: MatTableDataSource<IContact>;
  displayedColumns: string [] = ['FirstName', 'LastName', 'Address', 'PhoneNumber'];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.contactService.getContacts());
  }

}
