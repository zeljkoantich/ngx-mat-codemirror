import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = new FormGroup({
    input: new FormControl('', [
      Validators.required,
    ]),
    html: new FormControl('', Validators.required),
    sass: new FormControl(`body {
  color: red;
}`, [
      Validators.required,
    ]),
    yaml: new FormControl(`- just: write some
- yaml:
  - [here, and]
  - {it: updates, in: real-time}
`, [
      Validators.required,
    ]),
  });

}
