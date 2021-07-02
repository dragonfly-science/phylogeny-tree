# Phylocanvas 3 
Phylogeny visualisation library for Newick tree format.

Forked from phylocanvas-3 branch developed by [The Centre for Genomic Pathogen Surveillance](https://www.pathogensurveillance.net/)

Examples of usage are in `dev/pages` folder.

## Example use
```javascript
import createTree from '@mkoliba/phylocanvas/createTree';
import interactionsPlugin from '@mkoliba/phylocanvas-plugin-interactions/index';
import '@mkoliba/phylocanvas-plugin-interactions/styles.css';
import contextMenu from '@mkoliba/phylocanvas-plugin-context-menu/index';
import '@mkoliba/phylocanvas-plugin-context-menu/styles.css';

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

In React project use [react-phylocanvas3](https://github.com/mkoliba/react-phylocanvas3) which wrap Phylocanvas3 in component or hook.

## API
- `createTree` 
Parameters:
  - `canvas`: canvas element
  - `options`: Phylocanvas3  Options object, have to contain key `source` with newick string, see Options below
  - `plugins`: array of Phylocanvas3 Plugins, see plugins section bellow

## Options
Properties of options object overide [default options]() properties ({ ...defaultOptions, ...options }) and resulting object is set as initial state of the tree.

Some of available options:
- `source`

## Plugins
Plugins have to have a folowing type:
```typescript
((tree: Tree, decorate: (fnName: string, fn: unknown) => void) => void)[];
```

Available plugins in independent npm packages:
- `contextMenu`
- `interactionsPlugin`
- `annotationsPlugin`
- `metadataPlugin`
- `scalebarPlugin`

### decorator function
