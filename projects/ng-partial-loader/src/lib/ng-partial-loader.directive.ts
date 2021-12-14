import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

interface Options {
  path: string;
  fallback?: string;
  customLoader?: string;
  loader?:
    | 'blocks'
    | 'dual-ring'
    | 'pulse'
    | 'rolling'
    | 'spin'
    | 'cube'
    | 'double-ring'
    | 'ellipsis'
    | 'ripple'
    | 'spinner';
}

@Directive({
  selector: '[ngPartialLoader]',
})
export class NgPartialLoaderDirective implements OnInit, OnChanges {
  @HostBinding('style.position')
  hostPosition = 'relative';

  @Input()
  ngPartialLoader = false;

  @Input()
  loaderOptions: Options;

  uuid: string;

  private get utils() {
    const options = this.loaderOptions;
    const defaults: Options = {
      path: './assets/',
      loader: 'cube',
    };

    return {
      options: options || defaults,
      loader() {
        const { path, loader, customLoader } = this.options;
        return `${path}${customLoader || loader + '.svg'}`;
      },
      uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
          (replacer) => {
            const random = (Math.random() * 16) | 0;
            const uuid = replacer === 'x' ? random : (random & 0x3) | 0x8;
            return uuid.toString(16);
          }
        );
      },
    };
  }

  constructor(private targetEl: ElementRef, private renderer: Renderer2) {
    this.uuid = `ng-partial-loader-${this.utils.uuidv4()}`;
  }

  ngOnInit() {
    const loader = this.renderer.createElement('div') as HTMLDivElement;

    this.renderer.setAttribute(loader, 'id', this.uuid);
    this.renderer.setStyle(
      loader,
      'display',
      this.ngPartialLoader ? 'flex' : 'none'
    );
    this.renderer.setStyle(loader, 'position', 'absolute');
    this.renderer.setStyle(loader, 'justify-content', 'center');
    this.renderer.setStyle(loader, 'align-items', 'center');
    this.renderer.setStyle(loader, 'width', '100%');
    this.renderer.setStyle(loader, 'height', '100%');
    this.renderer.setStyle(loader, 'max-height', '40px');
    this.renderer.setStyle(loader, 'top', '0');
    this.renderer.setStyle(
      loader,
      'background-image',
      `url("${this.utils.loader()}")`
    );
    this.renderer.setStyle(loader, 'background-size', 'contain');
    this.renderer.setStyle(loader, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(loader, 'background-position', 'center');

    if (this.utils.options?.fallback) {
      this.renderer.setStyle(
        loader,
        'background',
        `url(${this.utils.options.fallback}) no-repeat center`
      );
    }

    (this.targetEl.nativeElement as HTMLElement).style.minHeight = '40px';
    this.renderer.appendChild(this.targetEl.nativeElement, loader);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (!simpleChanges['ngPartialLoader']?.firstChange) {
      const container = this.targetEl.nativeElement as HTMLDivElement;
      const div = container.querySelector(`#${this.uuid}`);
      if (div) {
        this.renderer.setStyle(
          div,
          'display',
          this.ngPartialLoader ? 'flex' : 'none'
        );
      }
    }
  }
}
