# ngx-mat-codemirror

[![Build Status](https://travis-ci.org/smnbbrv/ngx-mat-codemirror.svg?branch=master)](https://travis-ci.org/smnbbrv/ngx-mat-codemirror)

A code editor input for Angular Material 2+ based on Codemirror.

## Installation

```sh
npm i ngx-mat-codemirror codemirror
```

## Usage

First, import all the necessary codemirror modes (the languages that you are going to use) in the `main.ts`:

```ts
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/yaml/yaml';
```

Import module whenever you need to use the code editor:

```typescript
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

## lineNumbers option

The line numbers are automatically shown / hidden depending on the content of the input. If there is more than one line, they are shown, otherwise hidden.

## License

MIT
