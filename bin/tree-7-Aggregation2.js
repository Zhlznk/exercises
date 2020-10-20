#!/usr/bin/env node

import _ from 'lodash';
import { 
    mkdir, mkfile, isFile, getChildren, getName, getMeta, isDirectory 
} from '@hexlet/immutable-fs-trees';

const treeOne = mkdir('/', [
    mkdir('etc', [
      mkdir('apache'),
      mkdir('nginx', [
        mkfile('nginx.conf', { size: 800 }),
      ]),
      mkdir('consul', [
        mkfile('config.json', { size: 1200 }),
        mkfile('data', { size: 8200 }),
        mkfile('raft', { size: 80 }),
      ]),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);

const sizeCount = (dir) => {
  if (isFile(dir)) {
    return getMeta(dir).size;
  }
  const children = getChildren(dir);
  const sazes = children.map(sizeCount);
  return _.sum(sazes);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), sizeCount(child)]);
  return result.sort(([, a], [, b]) => b - a);
};

console.log(JSON.stringify(du(treeOne), null, ' '));
// console.log(JSON.stringify((treeOne), null, ' '));