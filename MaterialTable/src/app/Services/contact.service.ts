import { Injectable } from '@angular/core';
import {Contacts} from '../Data/ContactData';
import {IContact} from '../Interface/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
PhoneBook: IContact[];
  constructor() {
    this.PhoneBook = Contacts;
   }
  getContacts(): IContact[]{
    return this.PhoneBook;
  }
}
