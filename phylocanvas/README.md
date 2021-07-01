# Phylocanvas 3 
Phylogeny visualisation library for Newick tree format.

Forked from phylocanvas-3 branch developed by [The Centre for Genomic Pathogen Surveillance](https://www.pathogensurveillance.net/)

Examples of usage are in `dev/pages` folder.

## Usage
```javascript
import createTree from '@mkoliba/phylocanvas/createTree';
import interactionsPlugin from '@mkoliba/phylocanvas-plugin-interactions/index';
import '@mkoliba/phylocanvas-plugin-interactions/styles.css';
import contextMenu from '@mkoliba/phylocanvas-plugin-context-menu/index';
import '@mkoliba/phylocanvas-plugin-context-menu/styles.css';

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