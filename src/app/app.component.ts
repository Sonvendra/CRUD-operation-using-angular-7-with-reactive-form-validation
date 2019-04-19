import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  title = 'Assesment3';
  closeModal() {
    this.closeBtn.nativeElement.click();
  }
}
