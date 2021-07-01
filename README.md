# Phylocanvas 3 
Phylogeny visualisation library for Newick tree format.

Forked from phylocanvas-3 branch developed by [The Centre for Genomic Pathogen Surveillance](https://www.pathogensurveillance.net/)

## development guide
Clone repository and run: 
```
yarn install
```

### Top-level commands


Start a development build, with optional testing page. `page` should match a folder in `./dev/pages`.
```bash
yarn start [page]
```

Run yarn build inside each package, can be optionally scoped using the full package name, i.e. not the directory name.
```bash
yarn build [--scope=@mkoliba/phylocanvas-plugin-name]
```

Link every package globally.
```bash
yarn run link
```


## Add a package into a project
You can install individual packages into your project using (gitpkg service)[https://gitpkg.vercel.app/] 

Example: `yarn add 'https://gitpkg.now.sh/mkoliba/phylocanvas3/phylocanvas?main'`

## Publishing a new version

1.  Run a new build (see above) and commit it.

2.  Login to npm

3.  Run `yarn release`.

[for beta releases, choose "Custom Version" and enter "3.0.0-beta.{number}"]


