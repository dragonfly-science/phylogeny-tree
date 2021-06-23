# Phylocanvas 3 
Phylogeny visualisation library for Newick tree format.

Forked from phylocanvas-3 branch developed by [The Centre for Genomic Pathogen Surveillance](https://www.pathogensurveillance.net/)

Examples of usage are in `dev/pages` folder.

## Usage
```javascript
import createTree from '@cgps/phylocanvas/createTree';
import interactionsPlugin from '@cgps/phylocanvas-plugin-interactions/index';
import '@cgps/phylocanvas-plugin-interactions/styles.css';
import contextMenu from '@cgps/phylocanvas-plugin-context-menu/index';
import '@cgps/phylocanvas-plugin-context-menu/styles.css';

const newick =
'(Bovine:0.69395,(Gibbon:0.36079,(Orangutan:0.33636,(Gorilla:0.17147,(Chimp:0.19268,Human:0.11927):0.08386):0.06124):0.15057):0.54939,Mouse:1.2146);'
const canvasElement = document.querySelector('#canvas'),
const options = {
    source: newick,
    renderInternalLabels: true,
    rotatedIds: [
      '6',
    ],
    styles: {
      Mouse: { shape: 'square', fillStyle: 'red' },
      Human: { shape: 'triangle', fillStyle: 'green' },
      Gibbon: { shape: 'star', fillStyle: 'blue' },
      Bovine: { shape: 'hexagon', fillStyle: 'orange' },
      Chimp: { shape: 'hexastar', fillStyle: 'grey' },
      Orangutan: { shape: 'octastar', fillStyle: 'indigo' },
    }
  }
const plugins = [
    contextMenu,
    interactionsPlugin
  ]

const tree = createTree(canvasElement, options, plugins)
```

## development guide
### Top-level commands

Start a development build, with optional testing page. `page` should match a folder in `./dev/pages`.
```bash
yarn start [page]
```

Run yarn build inside each package, can be optionally scoped using the full package name, i.e. not the directory name.
```bash
yarn build [--scope=@cgps/phylocanvas-plugin-name]
```

Link every package globally.
```bash
yarn run link
```


## Add a package into a project
You can install individual pakages into your project using (gitpkg service)[https://gitpkg.vercel.app/] 

Example: `yarn add 'https://gitpkg.now.sh/mkoliba/phylocanvas3/phylocanvas?main'`

## Publishing a new version

1.  Run a new build (see above) and commit it.

2.  Login to npm

3.  Run `yarn release`.

[for beta releases, choose "Custom Version" and enter "3.0.0-beta.{number}"]


