import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

export interface CarouselSlide {
  src: string;
  title?: string;
  description?: string;
  alt?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: CarouselSlide[] = [];
  @Input() interval = 4000;
  @Input() pauseOnHover = true;
  @Input() showIndicators = true;
  @Input() showControls = true;

  current = 0;
  private sub?: Subscription;
  private isPaused = false;

  ngOnInit(): void {
    // start only if slides exist
    if (this.slides?.length > 1) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  /** ✅ Uses RxJS interval */
  startAutoSlide(): void {
    if (this.sub) return; // avoid multiple subscriptions
    this.sub = interval(this.interval).subscribe(() => {
      if (!this.isPaused) {
        this.next();
      }
    });
  }

  stopAutoSlide(): void {
    this.sub?.unsubscribe();
    this.sub = undefined;
  }

  goTo(index: number): void {
    if (!this.slides || this.slides.length === 0) return;
    this.current = ((index % this.slides.length) + this.slides.length) % this.slides.length;
  }

  prev(): void {
    this.goTo(this.current - 1);
  }

  next(): void {
    this.goTo(this.current + 1);
  }

  onMouseEnter(): void {
    if (this.pauseOnHover) this.isPaused = true;
  }

  onMouseLeave(): void {
    if (this.pauseOnHover) this.isPaused = false;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  private touchStartX = 0;
  private touchEndX = 0;

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    const dx = this.touchEndX - this.touchStartX;
    if (dx > 40) this.prev();
    else if (dx < -40) this.next();
  }
}
