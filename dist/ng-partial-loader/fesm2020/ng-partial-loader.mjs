import * as i0 from '@angular/core';
import { Directive, HostBinding, Input, NgModule } from '@angular/core';

class NgPartialLoaderDirective {
    constructor(targetEl, renderer) {
        this.targetEl = targetEl;
        this.renderer = renderer;
        this.hostPosition = 'relative';
        this.ngPartialLoader = false;
        this.uuid = `ng-partial-loader-${this.utils.uuidv4()}`;
    }
    get utils() {
        const options = this.loaderOptions;
        const defaults = {
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
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (replacer) => {
                    const random = (Math.random() * 16) | 0;
                    const uuid = replacer === 'x' ? random : (random & 0x3) | 0x8;
                    return uuid.toString(16);
                });
            },
        };
    }
    ngOnInit() {
        const loader = this.renderer.createElement('div');
        this.renderer.setAttribute(loader, 'id', this.uuid);
        this.renderer.setStyle(loader, 'display', this.ngPartialLoader ? 'flex' : 'none');
        this.renderer.setStyle(loader, 'position', 'absolute');
        this.renderer.setStyle(loader, 'justify-content', 'center');
        this.renderer.setStyle(loader, 'align-items', 'center');
        this.renderer.setStyle(loader, 'width', '100%');
        this.renderer.setStyle(loader, 'height', '100%');
        this.renderer.setStyle(loader, 'max-height', '40px');
        this.renderer.setStyle(loader, 'top', '0');
        this.renderer.setStyle(loader, 'background-image', `url("${this.utils.loader()}")`);
        this.renderer.setStyle(loader, 'background-size', 'contain');
        this.renderer.setStyle(loader, 'background-repeat', 'no-repeat');
        this.renderer.setStyle(loader, 'background-position', 'center');
        if (this.utils.options?.fallback) {
            this.renderer.setStyle(loader, 'background', `url(${this.utils.options.fallback}) no-repeat center`);
        }
        this.targetEl.nativeElement.style.minHeight = '40px';
        this.renderer.appendChild(this.targetEl.nativeElement, loader);
    }
    ngOnChanges(simpleChanges) {
        if (!simpleChanges['ngPartialLoader']?.firstChange) {
            const container = this.targetEl.nativeElement;
            const div = container.querySelector(`#${this.uuid}`);
            if (div) {
                this.renderer.setStyle(div, 'display', this.ngPartialLoader ? 'flex' : 'none');
            }
        }
    }
}
NgPartialLoaderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgPartialLoaderDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NgPartialLoaderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NgPartialLoaderDirective, selector: "[ngPartialLoader]", inputs: { ngPartialLoader: "ngPartialLoader", loaderOptions: "loaderOptions" }, host: { properties: { "style.position": "this.hostPosition" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgPartialLoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngPartialLoader]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { hostPosition: [{
                type: HostBinding,
                args: ['style.position']
            }], ngPartialLoader: [{
                type: Input
            }], loaderOptions: [{
                type: Input
            }] } });

class NgPartialLoaderModule {
}
NgPartialLoaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgPartialLoaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgPartialLoaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgPartialLoaderModule, declarations: [NgPartialLoaderDirective], exports: [NgPartialLoaderDirective] });
NgPartialLoaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgPartialLoaderModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgPartialLoaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgPartialLoaderDirective],
                    exports: [NgPartialLoaderDirective],
                }]
        }] });

/*
 * Public API Surface of ng-partial-loader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgPartialLoaderDirective, NgPartialLoaderModule };
//# sourceMappingURL=ng-partial-loader.mjs.map
