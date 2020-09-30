#!/usr/bin/env node

import _ from 'lodash';
import {
    mkdir, mkfile, isFile, getName, getMeta, getChildren,
  } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.JSON'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const downcaseFileNames = (oldTree) => {
    const children = getChildren(oldTree);
    const newChildren = children.map((child) => {
      if (!isFile(child)) {
        return downcaseFileNames(child);
      }
      return mkfile(getName(child).toLowerCase(), _.cloneDeep(getMeta(child)));
    });
    return mkdir(getName(oldTree), newChildren, getMeta(oldTree));
  };

console.log(JSON.stringify(downcaseFileNames(tree), null, ' '));

// downcaseFileNames(tree);
