## Publish to NPM

### Step 1: Build Package (test build)
    npm run build

### Step 2: Produce dist-lib/
    npm run packagr

### Step 3: Publish to NPM
    cd dist-lib/
    npm login
    npm publish

<br />

---

<br />


## Publish on GitHub

### Step 1: Push changes on a new branch
### Step 2: Create a pull request for that new branch
### Step 3: Merge pull request to master branch
### Step 4: [Draft new release](https://github.com/smnbbrv/ngx-mat-codemirror/releases/new)
### Step 5: Enter tag version (same as in package.json version)
### Step 6: Publish release
