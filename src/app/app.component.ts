import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin, of, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'learn-angular-17';
  unsubs: Subject<void> = new Subject();
  observable1 = of(1, 2, 3, 4);
  observable2 = of('a', 'b');
  ngOnInit(): void {
    forkJoin([this.observable1, this.observable2])
      .pipe(
        tap((el) => console.log(el)),
        takeUntil(this.unsubs)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.unsubs.next();
    this.unsubs.complete();
  }
}
