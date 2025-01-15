import {
  Component,
  DoCheck,
  effect,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { VoterComponent } from './voter/voter.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [VoterComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  @Input() minor = 0;
  @Input() major = 0;
  @Input() voters: string[] = [];

  @Output() totalClick = new EventEmitter<number>();

  totalVoted = 0;
  totalNotVote = 0;

  constructor() {
    console.log('Constructor Run ...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // it called before ngOnInit if there's input and on every changes occure
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('NgOnInit Run ...');
  }

  // called every after onChanges called and every ngOnInit called
  ngDoCheck(): void {
    console.log('NgDoCheck Run ...');
  }

  ngOnDestroy(): void {
    console.log('Clean up before destroy ...');
  }

  handleVote(isVote: boolean) {
    if (isVote) {
      ++this.totalVoted;
    } else {
      ++this.totalNotVote;
    }
    this.emitTotalClick();
  }

  private emitTotalClick() {
    this.totalClick.emit(this.totalVoted + this.totalNotVote);
  }
}
