import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})

export class DropdownDirective {

  constructor(private elRef: ElementRef) { }
  // Simplified version of click outside for dropdowns
  // div dropdown-container child 0  button or icon then child 1 dropdown
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) { return; }
    const clickedInside = this.elRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.elRef.nativeElement.children[1].classList.remove('is-active');
    }
  }
}
