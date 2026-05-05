import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private scrollAnimationSubject = new Subject<IntersectionObserverEntry>();
  public scrollAnimation$ = this.scrollAnimationSubject.asObservable();

  private observerMap = new Map<Element, IntersectionObserver>();

  constructor() {}

  /**
   * Setup intersection observer for scroll-triggered animations
   */
  observeElement(element: Element, callback: (entry: IntersectionObserverEntry) => void): void {
    if (this.observerMap.has(element)) {
      return; // Already observing this element
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          this.scrollAnimationSubject.next(entry);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    observer.observe(element);
    this.observerMap.set(element, observer);
  }

  /**
   * Unobserve element
   */
  unobserveElement(element: Element): void {
    const observer = this.observerMap.get(element);
    if (observer) {
      observer.unobserve(element);
      this.observerMap.delete(element);
    }
  }

  /**
   * Cleanup all observers
   */
  cleanup(): void {
    this.observerMap.forEach((observer) => observer.disconnect());
    this.observerMap.clear();
  }

  /**
   * Add scroll animation classes to element
   */
  addScrollAnimation(element: Element, animationType: 'fade-in' | 'slide-up' | 'slide-in-left' | 'scale-up' | 'zoom-in'): void {
    this.observeElement(element, (entry) => {
      if (entry.isIntersecting) {
        element.classList.add('animate-on-scroll', `animate-${animationType}`);
      }
    });
  }

  /**
   * Stagger multiple elements
   */
  staggerElements(elements: Element[], animationType: 'fade-in' | 'slide-up' | 'slide-in-left' | 'scale-up' | 'zoom-in', delayMs: number = 100): void {
    elements.forEach((element, index) => {
      setTimeout(() => {
        this.addScrollAnimation(element, animationType);
      }, delayMs * index);
    });
  }

  /**
   * Animate counter from 0 to target value
   */
  animateCounter(element: HTMLElement, targetValue: number, duration: number = 2000): void {
    const startValue = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out-quad)
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeProgress);

      element.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * Ripple effect on click
   */
  createRipple(event: MouseEvent, element: HTMLElement): void {
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = (event.clientX - element.offsetLeft - radius) + 'px';
    circle.style.top = (event.clientY - element.offsetTop - radius) + 'px';
    circle.classList.add('ripple');

    // Remove previous ripple if exists
    const ripple = element.querySelector('.ripple');
    if (ripple) ripple.remove();

    element.appendChild(circle);

    // Remove ripple after animation completes
    setTimeout(() => circle.remove(), 600);
  }

  /**
   * Page transition animation
   */
  pageTransitionOut(): Promise<void> {
    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.classList.add('page-transition-overlay');
      document.body.appendChild(overlay);

      setTimeout(() => {
        overlay.classList.add('active');
        setTimeout(resolve, 300);
      }, 0);
    });
  }

  pageTransitionIn(): Promise<void> {
    return new Promise((resolve) => {
      const overlay = document.querySelector('.page-transition-overlay');
      if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
          overlay.remove();
          resolve();
        }, 300);
      } else {
        resolve();
      }
    });
  }
}
