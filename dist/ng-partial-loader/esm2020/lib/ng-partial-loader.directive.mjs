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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGFydGlhbC1sb2FkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcGFydGlhbC1sb2FkZXIvc3JjL2xpYi9uZy1wYXJ0aWFsLWxvYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxHQUtOLE1BQU0sZUFBZSxDQUFDOztBQXNCdkIsTUFBTSxPQUFPLHdCQUF3QjtJQXNDbkMsWUFBb0IsUUFBb0IsRUFBVSxRQUFtQjtRQUFqRCxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXBDckUsaUJBQVksR0FBRyxVQUFVLENBQUM7UUFHMUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFrQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBNUJELElBQVksS0FBSztRQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbkMsTUFBTSxRQUFRLEdBQVk7WUFDeEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBRUYsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUTtZQUM1QixNQUFNO2dCQUNKLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3BELE9BQU8sR0FBRyxJQUFJLEdBQUcsWUFBWSxJQUFJLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztZQUNyRCxDQUFDO1lBQ0QsTUFBTTtnQkFDSixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FDbkQsT0FBTyxFQUNQLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ1gsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxNQUFNLElBQUksR0FBRyxRQUFRLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDOUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQ0YsQ0FBQztZQUNKLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQW1CLENBQUM7UUFFcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQ3ZDLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLE1BQU0sRUFDTixrQkFBa0IsRUFDbEIsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQ2hDLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsTUFBTSxFQUNOLFlBQVksRUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsb0JBQW9CLENBQ3ZELENBQUM7U0FDSDtRQUVBLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBNkIsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsV0FBVyxDQUFDLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBRSxXQUFXLEVBQUU7WUFDbEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUErQixDQUFDO1lBQ2hFLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FDdkMsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDOztxSEEzRlUsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjt5SEFHQyxZQUFZO3NCQURYLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUk3QixlQUFlO3NCQURkLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIHBhdGg6IHN0cmluZztcbiAgZmFsbGJhY2s/OiBzdHJpbmc7XG4gIGN1c3RvbUxvYWRlcj86IHN0cmluZztcbiAgbG9hZGVyPzpcbiAgICB8ICdibG9ja3MnXG4gICAgfCAnZHVhbC1yaW5nJ1xuICAgIHwgJ3B1bHNlJ1xuICAgIHwgJ3JvbGxpbmcnXG4gICAgfCAnc3BpbidcbiAgICB8ICdjdWJlJ1xuICAgIHwgJ2RvdWJsZS1yaW5nJ1xuICAgIHwgJ2VsbGlwc2lzJ1xuICAgIHwgJ3JpcHBsZSdcbiAgICB8ICdzcGlubmVyJztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nUGFydGlhbExvYWRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ1BhcnRpYWxMb2FkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKVxuICBob3N0UG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gIEBJbnB1dCgpXG4gIG5nUGFydGlhbExvYWRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGxvYWRlck9wdGlvbnM6IE9wdGlvbnM7XG5cbiAgdXVpZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgZ2V0IHV0aWxzKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmxvYWRlck9wdGlvbnM7XG4gICAgY29uc3QgZGVmYXVsdHM6IE9wdGlvbnMgPSB7XG4gICAgICBwYXRoOiAnLi9hc3NldHMvJyxcbiAgICAgIGxvYWRlcjogJ2N1YmUnLFxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCBkZWZhdWx0cyxcbiAgICAgIGxvYWRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYXRoLCBsb2FkZXIsIGN1c3RvbUxvYWRlciB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICByZXR1cm4gYCR7cGF0aH0ke2N1c3RvbUxvYWRlciB8fCBsb2FkZXIgKyAnLnN2Zyd9YDtcbiAgICAgIH0sXG4gICAgICB1dWlkdjQoKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKFxuICAgICAgICAgIC9beHldL2csXG4gICAgICAgICAgKHJlcGxhY2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb20gPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgICAgICAgICBjb25zdCB1dWlkID0gcmVwbGFjZXIgPT09ICd4JyA/IHJhbmRvbSA6IChyYW5kb20gJiAweDMpIHwgMHg4O1xuICAgICAgICAgICAgcmV0dXJuIHV1aWQudG9TdHJpbmcoMTYpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFyZ2V0RWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMudXVpZCA9IGBuZy1wYXJ0aWFsLWxvYWRlci0ke3RoaXMudXRpbHMudXVpZHY0KCl9YDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGxvYWRlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShsb2FkZXIsICdpZCcsIHRoaXMudXVpZCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIGxvYWRlcixcbiAgICAgICdkaXNwbGF5JyxcbiAgICAgIHRoaXMubmdQYXJ0aWFsTG9hZGVyID8gJ2ZsZXgnIDogJ25vbmUnXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdqdXN0aWZ5LWNvbnRlbnQnLCAnY2VudGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdhbGlnbi1pdGVtcycsICdjZW50ZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ2hlaWdodCcsICcxMDAlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdtYXgtaGVpZ2h0JywgJzQwcHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxvYWRlciwgJ3RvcCcsICcwJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIGxvYWRlcixcbiAgICAgICdiYWNrZ3JvdW5kLWltYWdlJyxcbiAgICAgIGB1cmwoXCIke3RoaXMudXRpbHMubG9hZGVyKCl9XCIpYFxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdiYWNrZ3JvdW5kLXNpemUnLCAnY29udGFpbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobG9hZGVyLCAnYmFja2dyb3VuZC1yZXBlYXQnLCAnbm8tcmVwZWF0Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsb2FkZXIsICdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJ2NlbnRlcicpO1xuXG4gICAgaWYgKHRoaXMudXRpbHMub3B0aW9ucz8uZmFsbGJhY2spIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIGxvYWRlcixcbiAgICAgICAgJ2JhY2tncm91bmQnLFxuICAgICAgICBgdXJsKCR7dGhpcy51dGlscy5vcHRpb25zLmZhbGxiYWNrfSkgbm8tcmVwZWF0IGNlbnRlcmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgKHRoaXMudGFyZ2V0RWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc3R5bGUubWluSGVpZ2h0ID0gJzQwcHgnO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy50YXJnZXRFbC5uYXRpdmVFbGVtZW50LCBsb2FkZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghc2ltcGxlQ2hhbmdlc1snbmdQYXJ0aWFsTG9hZGVyJ10/LmZpcnN0Q2hhbmdlKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnRhcmdldEVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICBjb25zdCBkaXYgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7dGhpcy51dWlkfWApO1xuICAgICAgaWYgKGRpdikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgIGRpdixcbiAgICAgICAgICAnZGlzcGxheScsXG4gICAgICAgICAgdGhpcy5uZ1BhcnRpYWxMb2FkZXIgPyAnZmxleCcgOiAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==