// require('../polyfill');

import { TreeTypes } from '@mkoliba/phylogeny-tree/constants';
// import parse from '@mkoliba/phylogeny-tree/parse';
import createTree from '@mkoliba/phylogeny-tree/createTree';

import logPlugin from '../../plugins/log';
// import interactionsPlugin from '@mkoliba/phylogeny-tree-plugin-interactions/index';
import interactionsPlugin from '../../../plugin-interactions/index';
import '../../../plugin-interactions/styles.css';
// import contextMenu from '@mkoliba/phylogeny-tree-plugin-context-menu/index';
import contextMenu from '../../../plugin-context-menu/index';
import '../../../plugin-context-menu/styles.css';

const newick =
'(Bovine:0.69395,(Gibbon:0.36079,(Orangutan:0.33636,(Gorilla:0.17147,(Chimp:0.19268,Human:0.11927):0.08386):0.06124):0.15057):0.54939,Mouse:1.2146);'
// '((Bovine:0.69395,Mouse:1.2146):0.54939,(Gibbon:0.36079,(Orangutan:0.33636,(Gorilla:0.17147,(Chimp:0.19268,Human:0.11927):0.08386):0.06124):0.15057):0.54939);'
;

let tree = createTree(
  document.querySelector('#phylocanvas'),
  {
    source: newick,
  },
  [
    contextMenu,
    interactionsPlugin,
    // logPlugin,
    // drawSteps,
    // annotationsPlugin,
  ]
);


tree.destroy();

tree = createTree(
  document.querySelector('#phylocanvas'),
  {
    source: newick,
  },
  [
    contextMenu,
    interactionsPlugin,
  ]
);

// tree.collapseNode(tree.getNodeById('6'));
// tree.collapseNode(tree.getNodeById('7'));

// tree.collapseNode(tr

tree.onToggleMetadataLabels = (_, node) => console.log('HIDE', node);

window.tree = tree;
