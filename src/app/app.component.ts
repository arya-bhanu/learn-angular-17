import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'learn-angular-17';
  b = new BehaviorSubject<string>('Init');

  constructor(private formBuilder: FormBuilder) {}

  inputForm = this.formBuilder.group({ input: '' });
  valPipe!: Observable<string>;

  ngOnInit(): void {
    const a = of(['Hello']);
    a.subscribe({
      next: (val) => {
        console.log(val);
      },
    }).unsubscribe();

    this.valPipe = this.b.pipe(map((val) => `Pipe: ${val}`));

    this.b.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
  }

  clickSubs() {
    const s = this.inputForm.value.input || '';
    this.b.next(s);
  }
}
