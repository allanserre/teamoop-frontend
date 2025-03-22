import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizable]',
  standalone: true,
})
export class ResizableDirective {
  private resizing = false;
  private startX = 0;
  private startY = 0;
  private startWidth = 0;
  private startHeight = 0;
  private resizer!: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.createResizer();
  }

  private createResizer(): void {
    this.resizer = this.renderer.createElement('div');
    this.renderer.setStyle(this.resizer, 'width', '0');
    this.renderer.setStyle(this.resizer, 'height', '0');
    this.renderer.setStyle(this.resizer, 'border-left', '15px solid transparent');
    this.renderer.setStyle(this.resizer, 'border-top', '15px solid transparent');
    this.renderer.setStyle(this.resizer, 'border-right', '15px solid gray');
    this.renderer.setStyle(this.resizer, 'position', 'absolute');
    this.renderer.setStyle(this.resizer, 'right', '0');
    this.renderer.setStyle(this.resizer, 'bottom', '0');
    this.renderer.setStyle(this.resizer, 'cursor', 'se-resize');
    this.renderer.setStyle(this.resizer, 'z-index', '10');

    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.appendChild(this.el.nativeElement, this.resizer);

    this.renderer.listen(this.resizer, 'mousedown', this.onMouseDown.bind(this));
  }

  private onMouseDown(event: MouseEvent): void {
    event.preventDefault();
    this.resizing = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startWidth = this.el.nativeElement.offsetWidth;
    this.startHeight = this.el.nativeElement.offsetHeight;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  private onMouseMove = (event: MouseEvent): void => {
    if (!this.resizing) return;
    const newWidth = this.startWidth + (event.clientX - this.startX);
    const newHeight = this.startHeight + (event.clientY - this.startY);
    this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
    this.renderer.setStyle(this.el.nativeElement, 'height', `${newHeight}px`);
  };

  private onMouseUp = (): void => {
    this.resizing = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };
}
