#!/usr/bin/env node

import _ from 'lodash';
import path from 'path';
import { mkdir, mkfile, isFile, getChildren, getName } from '@hexlet/immutable-fs-trees';

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

const findFilesByName = (tree, str) => {
  const name = getName(tree);
  const children = getChildren(tree);
  const pathArr = [];

  return path.join(name);
};

console.log(findFilesByName(treeOne, 'co'));

// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));