import { Directive, HostBinding, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class NgPartialLoaderDirective {
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
            path: 'assets',
            loader: 'cube',
            minHeight: '40px',
        };
        return {
            options: { ...defaults, ...(options && { ...options }) },
            loader() {
                const { path, loader, customLoader } = this.options;
                return `${path}/${customLoader || loader + '.svg'}`;
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
        const element = this.targetEl.nativeElement;
        element.style.minHeight = this.utils.options.minHeight;
        this.renderer.appendChild(element, loader);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGFydGlhbC1sb2FkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcGFydGlhbC1sb2FkZXIvc3JjL2xpYi9uZy1wYXJ0aWFsLWxvYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxHQUtOLE1BQU0sZUFBZSxDQUFDOztBQXVCdkIsTUFBTSxPQUFPLHdCQUF3QjtJQW9DbkMsWUFBb0IsUUFBb0IsRUFBVSxRQUFtQjtRQUFqRCxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWxDckUsaUJBQVksR0FBRyxVQUFVLENBQUM7UUFHMUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFnQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBMUJELElBQVksS0FBSztRQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbkMsTUFBTSxRQUFRLEdBQTJCO1lBQ3ZDLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsTUFBTTtTQUNsQixDQUFDO1FBRUYsT0FBTztZQUNMLE9BQU8sRUFBRSxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDeEQsTUFBTTtnQkFDSixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNwRCxPQUFPLEdBQUcsSUFBSSxJQUFJLFlBQVksSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFDdEQsQ0FBQztZQUNELE1BQU07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QUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsV0FBVyxDQUFDLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBRSxXQUFXLEVBQUU7WUFDbEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUErQixDQUFDO1lBQ2hFLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEY7U0FDRjtJQUNILENBQUM7O3FIQTFFVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCO3lIQUdDLFlBQVk7c0JBRFgsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBSTdCLGVBQWU7c0JBRGQsS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE5nUGFydGlhbExvYWRlck9wdGlvbnMgPSBQYXJ0aWFsPHtcbiAgcGF0aDogc3RyaW5nO1xuICBmYWxsYmFjazogc3RyaW5nO1xuICBjdXN0b21Mb2FkZXI6IHN0cmluZztcbiAgbWluSGVpZ2h0OiBzdHJpbmc7XG4gIGxvYWRlcjpcbiAgICB8ICdibG9ja3MnXG4gICAgfCAnZHVhbC1yaW5nJ1xuICAgIHwgJ3B1bHNlJ1xuICAgIHwgJ3JvbGxpbmcnXG4gICAgfCAnc3BpbidcbiAgICB8ICdjdWJlJ1xuICAgIHwgJ2RvdWJsZS1yaW5nJ1xuICAgIHwgJ2VsbGlwc2lzJ1xuICAgIHwgJ3JpcHBsZSdcbiAgICB8ICdzcGlubmVyJztcbn0+O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdQYXJ0aWFsTG9hZGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5nUGFydGlhbExvYWRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpXG4gIGhvc3RQb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cbiAgQElucHV0KClcbiAgbmdQYXJ0aWFsTG9hZGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgbG9hZGVyT3B0aW9uczogTmdQYXJ0aWFsTG9hZGVyT3B0aW9ucztcblxuICB1dWlkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBnZXQgdXRpbHMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMubG9hZGVyT3B0aW9ucztcbiAgICBjb25zdCBkZWZhdWx0czogTmdQYXJ0aWFsTG9hZGVyT3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6ICdhc3NldHMnLFxuICAgICAgbG9hZGVyOiAnY3ViZScsXG4gICAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdGlvbnM6IHsgLi4uZGVmYXVsdHMsIC4uLihvcHRpb25zICYmIHsgLi4ub3B0aW9ucyB9KSB9LFxuICAgICAgbG9hZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBhdGgsIGxvYWRlciwgY3VzdG9tTG9hZGVyIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiBgJHtwYXRofS8ke2N1c3RvbUxvYWRlciB8fCBsb2FkZXIgKyAnLnN2Zyd9YDtcbiAgICAgIH0sXG4gICAgICB1dWlkdjQoKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChyZXBsYWNlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJhbmRvbSA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICAgICAgICBjb25zdCB1dWlkID0gcmVwbGFjZXIgPT09ICd4JyA/IHJhbmRvbSA6IChyYW5kb20gJiAweDMpIHwgMHg4O1xuICAgICAgICAgIHJldHVybiB1dWlkLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldEVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnV1aWQgPSBgbmctcGFydGlhbC1sb2FkZXItJHt0aGlzLnV0aWxzLnV1aWR2NCgpfWA7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobG9hZGVyLCAnaWQnLCB0aGlzLnV1aWQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnZGlzcGxheScsIHRoaXMubmdQYXJ0aWFsTG9hZGVyID8gJ2ZsZXgnIDogJ25vbmUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdqdXN0aWZ5LWNvbnRlbnQnLCAnY2VudGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdhbGlnbi1pdGVtcycsICdjZW50ZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ2hlaWdodCcsICcxMDAlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdtYXgtaGVpZ2h0JywgJzQwcHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ3RvcCcsICcwJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdiYWNrZ3JvdW5kLWltYWdlJywgYHVybChcIiR7dGhpcy51dGlscy5sb2FkZXIoKX1cIilgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ2JhY2tncm91bmQtc2l6ZScsICdjb250YWluJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdiYWNrZ3JvdW5kLXJlcGVhdCcsICduby1yZXBlYXQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ2JhY2tncm91bmQtcG9zaXRpb24nLCAnY2VudGVyJyk7XG5cbiAgICBpZiAodGhpcy51dGlscy5vcHRpb25zPy5mYWxsYmFjaykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdiYWNrZ3JvdW5kJywgYHVybCgke3RoaXMudXRpbHMub3B0aW9ucy5mYWxsYmFja30pIG5vLXJlcGVhdCBjZW50ZXJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50YXJnZXRFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gdGhpcy51dGlscy5vcHRpb25zLm1pbkhlaWdodCBhcyBzdHJpbmc7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlbGVtZW50LCBsb2FkZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghc2ltcGxlQ2hhbmdlc1snbmdQYXJ0aWFsTG9hZGVyJ10/LmZpcnN0Q2hhbmdlKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnRhcmdldEVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICBjb25zdCBkaXYgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7dGhpcy51dWlkfWApO1xuICAgICAgaWYgKGRpdikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRpdiwgJ2Rpc3BsYXknLCB0aGlzLm5nUGFydGlhbExvYWRlciA/ICdmbGV4JyA6ICdub25lJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=