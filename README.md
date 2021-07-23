# Javascript phylogeny tree visualisation library
Phylogeny visualisation library for Newick tree format.

Forked from phylocanvas-3 development branch of Phylocanvas developed by [The Centre for Genomic Pathogen Surveillance](https://www.pathogensurveillance.net/)


![phylogeny-tree example illustration](./illustration.jpg)

## Packages
- [`@mkoliba/phylogeny-tree`](https://github.com/mkoliba/phylogeny-tree/tree/main/phylogeny-tree): main package containing visualisation library 
- [`@mkoliba/phylogeny-tree-plugin-context-menu`](https://github.com/mkoliba/phylogeny-tree/tree/main/plugin-context-menu): adds context menu 
- [`@mkoliba/phylogeny-tree-plugin-interactions`](https://github.com/mkoliba/phylogeny-tree/tree/main/plugin-interactions): adds interaction features such as zoom, highlight, selection, view of subtree
- [`@mkoliba/phylogeny-tree-plugin-scalebar`](https://github.com/mkoliba/phylogeny-tree/tree/main/plugin-scalebar): adds a scalebar to bottom left corner of canvas for length reference. 
- [`@mkoliba/phylogeny-tree-plugin-annotations`](https://github.com/mkoliba/phylogeny-tree/tree/main/plugin-annotations): adds annotations above leaves
- [`@mkoliba/phylogeny-tree-plugin-metadata`](https://github.com/mkoliba/phylogeny-tree/tree/main/plugin-metadata): adds additional metadata lables and markers next to leaves

add package to your project using `yarn add` or `npm install -S`

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

Available pages with examples:
- annotations
- context-menu
- interactions
- metadata
- scalebar
- tooltip

Run yarn build inside each package, can be optionally scoped using the full package name, i.e. not the directory name.
```bash
yarn build [--scope=@mkoliba/phylogeny-tree-plugin-name]
```

Link every package globally.
```bash
yarn run link
```

## Publishing a new version

1.  Run a new build (see above) and commit it.

2.  Login to npm

3.  Run `yarn release`.

[for beta releases, choose "Custom Version" and enter "3.0.0-beta.{number}"]


