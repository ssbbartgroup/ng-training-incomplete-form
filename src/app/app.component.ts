import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Incomplete Angular Form';
  subtitle = 'Please make this page, form, and error messages accessible. Do not forget to implement focus management.';
  likeCounter = 12;
  ariaLiveAnnouncement = '';

  // Simple like feature code
  addToCounter() {
      ++this.likeCounter;
      this.ariaLiveAnnouncement = this.likeCounter + ' likes';
  }
}
