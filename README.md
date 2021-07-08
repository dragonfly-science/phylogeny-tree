# Phylocanvas 3 
Phylogeny visualisation library for Newick tree format.

Forked from phylocanvas-3 branch developed by [The Centre for Genomic Pathogen Surveillance](https://www.pathogensurveillance.net/)


![Phylocanvas3 example illustration](./illustration.jpg)

## Packages
- [`@mkoliba/phylocanvas`](https://github.com/mkoliba/phylocanvas3/tree/main/phylocanvas): main package containing visualisation library 
- [`@mkoliba/phylocanvas-plugin-context-menu`](https://github.com/mkoliba/phylocanvas3/tree/main/plugin-context-menu): adds context menu 
- [`@mkoliba/phylocanvas-plugin-interactions`](https://github.com/mkoliba/phylocanvas3/tree/main/plugin-interactions): adds interaction features such as zoom, highlight, selection, view of subtree
- [`@mkoliba/phylocanvas-plugin-scalebar`](https://github.com/mkoliba/phylocanvas3/tree/main/plugin-scalebar): adds a scalebar to bottom left corner of canvas for length reference. 
- [`@mkoliba/phylocanvas-plugin-annotations`](https://github.com/mkoliba/phylocanvas3/tree/main/plugin-annotations): adds annotations above leaves
- [`@mkoliba/phylocanvas-plugin-metadata`](https://github.com/mkoliba/phylocanvas3/tree/main/plugin-metadata): adds additional metadata lables and markers next to leaves

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
yarn build [--scope=@mkoliba/phylocanvas-plugin-name]
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


