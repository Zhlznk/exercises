#!/usr/bin/env node

import _ from 'lodash';
import { 
  mkdir, mkfile, isFile, getChildren, getName, getMeta 
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('my documents', [
  mkdir('documents.jpg'),
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations'),
], { test: 'haha' });

const compressImages = (oldTree) => {
  const children = getChildren(oldTree);
  const newChildren = children.map((child) => {
    const childMeta = _.cloneDeep(getMeta(child));
    if (!isFile(child) || child.name.slice(-4) !== '.jpg') {
      return mkdir(getName(child), getChildren(child), childMeta);
    }
    child.meta.size /= 2;
    return mkfile(getName(child), _.cloneDeep(getMeta(child)));
  });
  return mkdir(getName(oldTree), newChildren, getMeta(oldTree));
};

console.log(JSON.stringify(compressImages(tree), null, ' '));

// console.log(getChildren(tree));
