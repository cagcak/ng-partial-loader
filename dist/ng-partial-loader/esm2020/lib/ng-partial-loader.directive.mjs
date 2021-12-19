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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGFydGlhbC1sb2FkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcGFydGlhbC1sb2FkZXIvc3JjL2xpYi9uZy1wYXJ0aWFsLWxvYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxHQUtOLE1BQU0sZUFBZSxDQUFDOztBQXVCdkIsTUFBTSxPQUFPLHdCQUF3QjtJQW9DbkMsWUFBb0IsUUFBb0IsRUFBVSxRQUFtQjtRQUFqRCxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWxDckUsaUJBQVksR0FBRyxVQUFVLENBQUM7UUFHMUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFnQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBMUJELElBQVksS0FBSztRQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbkMsTUFBTSxRQUFRLEdBQVk7WUFDeEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFFRixPQUFPO1lBQ0wsT0FBTyxFQUFFLEVBQUUsR0FBRyxRQUFRLEVBQUUsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUN4RCxNQUFNO2dCQUNKLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3BELE9BQU8sR0FBRyxJQUFJLElBQUksWUFBWSxJQUFJLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztZQUN0RCxDQUFDO1lBQ0QsTUFBTTtn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QU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLENBQUMsYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFdBQVcsRUFBRTtZQUNsRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQStCLENBQUM7WUFDaEUsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoRjtTQUNGO0lBQ0gsQ0FBQzs7cUhBMUVVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBSHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7eUhBR0MsWUFBWTtzQkFEWCxXQUFXO3VCQUFDLGdCQUFnQjtnQkFJN0IsZUFBZTtzQkFEZCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBwYXRoOiBzdHJpbmc7XG4gIGZhbGxiYWNrPzogc3RyaW5nO1xuICBjdXN0b21Mb2FkZXI/OiBzdHJpbmc7XG4gIG1pbkhlaWdodD86IHN0cmluZztcbiAgbG9hZGVyPzpcbiAgICB8ICdibG9ja3MnXG4gICAgfCAnZHVhbC1yaW5nJ1xuICAgIHwgJ3B1bHNlJ1xuICAgIHwgJ3JvbGxpbmcnXG4gICAgfCAnc3BpbidcbiAgICB8ICdjdWJlJ1xuICAgIHwgJ2RvdWJsZS1yaW5nJ1xuICAgIHwgJ2VsbGlwc2lzJ1xuICAgIHwgJ3JpcHBsZSdcbiAgICB8ICdzcGlubmVyJztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nUGFydGlhbExvYWRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ1BhcnRpYWxMb2FkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKVxuICBob3N0UG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gIEBJbnB1dCgpXG4gIG5nUGFydGlhbExvYWRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGxvYWRlck9wdGlvbnM6IE9wdGlvbnM7XG5cbiAgdXVpZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgZ2V0IHV0aWxzKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmxvYWRlck9wdGlvbnM7XG4gICAgY29uc3QgZGVmYXVsdHM6IE9wdGlvbnMgPSB7XG4gICAgICBwYXRoOiAnYXNzZXRzJyxcbiAgICAgIGxvYWRlcjogJ2N1YmUnLFxuICAgICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiB7IC4uLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyAmJiB7IC4uLm9wdGlvbnMgfSkgfSxcbiAgICAgIGxvYWRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYXRoLCBsb2FkZXIsIGN1c3RvbUxvYWRlciB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICByZXR1cm4gYCR7cGF0aH0vJHtjdXN0b21Mb2FkZXIgfHwgbG9hZGVyICsgJy5zdmcnfWA7XG4gICAgICB9LFxuICAgICAgdXVpZHY0KCkge1xuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAocmVwbGFjZXIpID0+IHtcbiAgICAgICAgICBjb25zdCByYW5kb20gPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgICAgICAgY29uc3QgdXVpZCA9IHJlcGxhY2VyID09PSAneCcgPyByYW5kb20gOiAocmFuZG9tICYgMHgzKSB8IDB4ODtcbiAgICAgICAgICByZXR1cm4gdXVpZC50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXRFbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy51dWlkID0gYG5nLXBhcnRpYWwtbG9hZGVyLSR7dGhpcy51dGlscy51dWlkdjQoKX1gO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGxvYWRlciwgJ2lkJywgdGhpcy51dWlkKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ2Rpc3BsYXknLCB0aGlzLm5nUGFydGlhbExvYWRlciA/ICdmbGV4JyA6ICdub25lJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnanVzdGlmeS1jb250ZW50JywgJ2NlbnRlcicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnYWxpZ24taXRlbXMnLCAnY2VudGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICd3aWR0aCcsICcxMDAlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdoZWlnaHQnLCAnMTAwJScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnbWF4LWhlaWdodCcsICc0MHB4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICd0b3AnLCAnMCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoXCIke3RoaXMudXRpbHMubG9hZGVyKCl9XCIpYCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdiYWNrZ3JvdW5kLXNpemUnLCAnY29udGFpbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnYmFja2dyb3VuZC1yZXBlYXQnLCAnbm8tcmVwZWF0Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJ2NlbnRlcicpO1xuXG4gICAgaWYgKHRoaXMudXRpbHMub3B0aW9ucz8uZmFsbGJhY2spIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnYmFja2dyb3VuZCcsIGB1cmwoJHt0aGlzLnV0aWxzLm9wdGlvbnMuZmFsbGJhY2t9KSBuby1yZXBlYXQgY2VudGVyYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMudGFyZ2V0RWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBlbGVtZW50LnN0eWxlLm1pbkhlaWdodCA9IHRoaXMudXRpbHMub3B0aW9ucy5taW5IZWlnaHQgYXMgc3RyaW5nO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCwgbG9hZGVyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXNpbXBsZUNoYW5nZXNbJ25nUGFydGlhbExvYWRlciddPy5maXJzdENoYW5nZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy50YXJnZXRFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgY29uc3QgZGl2ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudXVpZH1gKTtcbiAgICAgIGlmIChkaXYpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkaXYsICdkaXNwbGF5JywgdGhpcy5uZ1BhcnRpYWxMb2FkZXIgPyAnZmxleCcgOiAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19