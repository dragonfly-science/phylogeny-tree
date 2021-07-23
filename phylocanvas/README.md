# phylogeny-tree
Javascript phylogeny visualisation library for Newick tree format.

Forked from phylocanvas-3 development branch of Phylocanvas developed by [The Centre for Genomic Pathogen Surveillance](https://www.pathogensurveillance.net/)

Examples of usage are in `dev/pages` folder.

## Example use
```javascript
import createTree from '@mkoliba/phylogeny-tree/createTree';
import interactionsPlugin from '@mkoliba/phylogeny-tree-plugin-interactions/index';
import '@mkoliba/phylogeny-tree-plugin-interactions/styles.css';
import contextMenu from '@mkoliba/phylogeny-tree-plugin-context-menu/index';
import '@mkoliba/phylogeny-tree-plugin-context-menu/styles.css';

const newick =
'(Bovine:0.69395,(Gibbon:0.36079,(Orangutan:0.33636,(Gorilla:0.17147,(Chimp:0.19268,Human:0.11927):0.08386):0.06124):0.15057):0.54939,Mouse:1.2146);'
const canvas = document.querySelector('#canvas'),
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

const tree = createTree(canvas, options, plugins)
```

In React project use [react-phylogeny-treettps://github.com/mkoliba/react-pppphylogeny-treeh wrap Phylocanvas3 in component or hook.

## API
- `createTree` 
Parameters:
  - `canvas`: canvas element
  - `options`: Phylocanvas3  Options object, have to contain key `source` with newick string, see Options below
  - `plugins`: array of Phylocanvas3 Plugins, see plugins section bellow

## Options
Properties of options object overide [default options](https://github.com/mkoliba/phylogeny-treeob/main/phylogeny-tree/defaults.js) properties ({ ...defaultOptions, ...options }) and resulting object is set as initial state of the tree.

Some of available options:
- `source`: newick tree string, or object `{type: 'biojs', data}` where `data` key contains to biojs-io-newick tree object received from `parser.parse_newick`.

For others check [default options](https://github.com/mkoliba/phylogeny-treeob/main/phylogeny-tree/defaults.js) and [examples in dev folder](https://github.com/mkoliba/pppphylogeny-treemain/dev/pages).

## Plugins
Plugins have to have a folowing type:
```typescript
((tree: Tree, decorate: (fnName: string, fn: unknown) => void) => void)[];
```

Available plugins:
- [`@mkoliba/phylogeny-tree-plugin-context-menu`](https://github.com/mkoliba/phylogeny-treeee/main/plugin-context-menu): adds context menu 
- [`@mkoliba/phylogeny-tree-plugin-interactions`](https://github.com/mkoliba/phylogeny-treeee/main/plugin-interactions): adds interaction features such as zoom, highlight, selection, view of subtree
- [`@mkoliba/phylogeny-tree-plugin-scalebar`](https://github.com/mkoliba/phylogeny-treeee/main/plugin-scalebar): adds a scalebar to bottom left corner of canvas for length reference. 
- [`@mkoliba/phylogeny-tree-plugin-annotations`](https://github.com/mkoliba/phylogeny-treeee/main/plugin-annotations): adds annotations above leaves
- [`@mkoliba/phylogeny-tree-plugin-metadata`](https://github.com/mkoliba/phylogeny-treeee/main/plugin-metadata): adds additional metadata lables and markers next to leaves

add package to your project using `yarn add` or `npm install -S`