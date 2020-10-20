#!/usr/bin/env node

import _ from 'lodash';
import { mkdir, mkfile, isFile, getChildren, getName } from '@hexlet/immutable-fs-trees';

const treeOne = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);


const getHiddenFilesCount = (tree) => {
  if (isFile(tree)) {
    if (_.startsWith(getName(tree), '.')) {
      return 1
    }
    return 0;
  }

  const children = getChildren(tree);
  const descendantCounts = children.map(getHiddenFilesCount);
  return _.sum(descendantCounts);
};

console.log(JSON.stringify(getHiddenFilesCount(treeOne), null, ' '));