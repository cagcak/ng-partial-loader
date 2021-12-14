<p align="center">
  <img alt="NG Partial Loader Plugin" src="https://github.com/cagcak/ng-partial-loader/blob/main/projects/ng-partial-loader/src/assets/pulse.svg">
</p>

# ng-partial-loader

ng-partial-loader is an [Angular](https://angular.io/) library that fills unresolved async content by simple partial loader

Demo available @ [https://cagcak.github.io/ng-partial-loader](https://cagcak.github.io/ng-partial-loader)  
StackBlitz available @ [https://stackblitz.com/edit/ng-partial-loader](https://stackblitz.com/edit/ng-partial-loader)

### Table of contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

### ngx-markdown

To add ng-partial-loader library to your `package.json` use the following command.

```bash
npm install ng-partial-loader --save
```

or

```bash
yarn add ng-partial-loader
```

After installation completed, define `NgPartialLoaderModule` to your module scope to use

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgPartialLoaderModule } from "ng-partial-loader";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgPartialLoaderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage

`ng-partial-loader` requires a minimal directive definition to make loader available as in needed an alternative content with a boolean value to hide/show options as dynamically.

```typescript
isHttpRequestResolved: boolean = false;
```

```html
<div [ngPartialLoader]="isHttpRequestResolved">
  <span>This content will be available if isHttpRequestResolved is true</span>

  <div id="ng-partial-loader-uuid">
    this dynamic loader element added to dom when isHttpRequestResolved is true
  </div>
</div>
```

### Options

ng-partial-loader has an `Options` named model as below

```typescript
interface Options {
  path: string;
  fallback?: string;
  customLoader?: string;
  loader?:
    | "blocks"
    | "dual-ring"
    | "pulse"
    | "rolling"
    | "spin"
    | "cube"
    | "double-ring"
    | "ellipsis"
    | "ripple"
    | "spinner";
}
```

> If there is not any option defined, the directive will have default animated **cube** loader.

Below demonstrates how to pass options

```html
<div
  [ngPartialLoader]="isHttpRequestResolved"
  [loaderOptions]="{
        path: '/assets/my-images/',
        customLoader: 'bullets.gif'
    }"
>
  ...
</div>
```

## Contribution

Contributions are always welcome, just make sure that ...

- Your code style matches with the rest of the project
- Unit tests pass
- Linter passes

## Support Development

The use of this library is totally free and no donation is required.

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
