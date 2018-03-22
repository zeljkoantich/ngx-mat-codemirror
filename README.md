# ngx-mat-codemirror

[![Build Status](https://travis-ci.org/smnbbrv/ngx-mat-codemirror.svg?branch=master)](https://travis-ci.org/smnbbrv/ngx-mat-codemirror)

A code editor input for [Angular Material 2+](https://material.angular.io/) based on [codemirror](https://codemirror.net).

[Demo here](https://smnbbrv.github.io/ngx-mat-codemirror/).

## Installation

```sh
npm i -S ngx-mat-codemirror codemirror
```

and typings for codemirror:

```sh
npm i -D @types/codemirror
```

## Configuring styles

First, import `node_modules/codemirror/lib/codemirror.css` into your project.

Then in order to use standard codemirror themes you need to include the corresponding CSS files. All themes are located at `node_modules/codemirror/theme` folder.

A preview for the themes could be found [here](https://codemirror.net/demo/theme.html).

For example, if you use angular-cli, add the to your

```javascript
{
  ...
  "styles": [
    ...,
    "../node_modules/codemirror/lib/codemirror.css",
    "../node_modules/codemirror/theme/neat.css",
    ...,
  ],
  ...
}
```
       
This will import the `neat` codemirror theme and you can use it across the project.

## Configuring modes (languages)

Import all the necessary codemirror modes (the languages that you are going to use) in the `main.ts` or some barrel file that is going to be imported into `main.ts`.

All the modes could be found at `node_modules/codemirror/mode`;

For example if we are going to use SASS and YAML code editors then we import the following:

```ts
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/yaml/yaml';
```

> Note: it is not enough to import the modes into `scripts` section of `.angular-cli.json`.

## Usage

Import module whenever you need to use the code editor:

```typescript
import { NgModule } from '@angular/core';
import { MatCodemirrorModule } from 'ngx-mat-codemirror';

@NgModule({
  // ...
  imports: [
    // ...
    MatCodemirrorModule,
    // ...
  ],
  // ...
})
export class MyModule { }
```

Then use it:

```html
<mat-card-content>
  <mat-form-field>
    <mat-codemirror formControlName="yaml" required [options]="{ theme: 'neat', mode: 'yaml' }" placeholder="YAML"></mat-codemirror>
    <mat-error *ngIf="form.get('yaml').hasError('required')">required</mat-error>
    <mat-hint>YAML config sample</mat-hint>
  </mat-form-field>
</mat-card-content>
```

## API

The `mat-codemirror` input implements both `ControlValueAccessor` and `MatFormFieldControl`. That means all the properties that are used by / available for

- `ngModel`
- `formControl` / `formControlName`  
- material inputs

are also supported here.

Additionally the following properties / events are available:
 
* `[options]` - [options](http://codemirror.net/doc/manual.html#config) passed to the CodeMirror instance. **The lineNumbers option will be ignored by design.**
* `[name]` - name applied to the created textarea
* `[autoFocus]` - setting applied to the created textarea
* `[preserveScrollPosition]` - preserve previous scroll position after updating value
* `(focusChange)` - called when the editor is focused or loses focus
* `(scroll)` - called when the editor is scrolled
* `(cursorActivity)` - called when the text cursor is moved

> Note: the line numbers are automatically shown / hidden depending on the content of the input. If there is more than one line, they are shown, otherwise hidden.

## Credits

Credits to @TypeCtrl for [initial implementation of ControlValueAccessor](https://github.com/TypeCtrl/ngx-codemirror)

## License

MIT
