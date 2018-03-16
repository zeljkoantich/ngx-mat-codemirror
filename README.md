[![Build Status](https://travis-ci.org/smnbbrv/ngx-mat-codemirror.svg?branch=master)](https://travis-ci.org/smnbbrv/ngx-mat-codemirror)

# ngx-mat-codemirror

A code editor input for Angular Material 2+ based on Codemirror.

## Installation

```sh
npm i ngx-mat-codemirror codemirror
```

## Usage

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
    <mat-codemirror formControlName="yaml"
                    class="auto-height"
                    required
                    (focusChange)="lineNumbers = $event"
                    [options]="{ lineNumbers: lineNumbers, theme: 'neat', mode: 'yaml' }"
                    placeholder="YAML"></mat-codemirror>
    <mat-error *ngIf="form.get('yaml').hasError('required')">required</mat-error>
    <mat-hint>YAML config sample</mat-hint>
  </mat-form-field>
</mat-card-content>
```

## License

MIT
