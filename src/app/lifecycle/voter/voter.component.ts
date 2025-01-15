import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  standalone: true,
  imports: [],
  templateUrl: './voter.component.html',
  styleUrl: './voter.component.css',
})
export class VoterComponent {
  isVoted = false;
  @Input() voter = '';
  @Output() voting = new EventEmitter<boolean>();

  setIsVoting(isVoting: boolean) {
    this.voting.emit(isVoting);
    this.isVoted = true;
  }
}
