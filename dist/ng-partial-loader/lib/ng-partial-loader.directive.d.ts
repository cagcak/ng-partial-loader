import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare type NgPartialLoaderOptions = Partial<{
    path: string;
    fallback: string;
    customLoader: string;
    minHeight: string;
    loader: 'blocks' | 'dual-ring' | 'pulse' | 'rolling' | 'spin' | 'cube' | 'double-ring' | 'ellipsis' | 'ripple' | 'spinner';
}>;
export declare class NgPartialLoaderDirective implements OnInit, OnChanges {
    private targetEl;
    private renderer;
    hostPosition: string;
    ngPartialLoader: boolean;
    loaderOptions: NgPartialLoaderOptions;
    uuid: string;
    private get utils();
    constructor(targetEl: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(simpleChanges: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgPartialLoaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgPartialLoaderDirective, "[ngPartialLoader]", never, { "ngPartialLoader": "ngPartialLoader"; "loaderOptions": "loaderOptions"; }, {}, never>;
}
