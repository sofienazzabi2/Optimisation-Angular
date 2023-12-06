import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userFullName = '';
  @Output() addUserEvent = new EventEmitter<string>();
  onAddUser() {
    this.addUserEvent.emit(this.userFullName);
    this.userFullName = '';
  }
}
