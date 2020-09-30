#!/usr/bin/env node

import _ from 'lodash';
import { 
  mkdir, mkfile, isFile, getChildren, getName, getMeta 
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
  ]);

const compressImages = (oldTree) => {
  const name = getName(oldTree);
  const meta = _.cloneDeep(getMeta(oldTree));
  const children = getChildren(oldTree);
  const newChildren = children.map((child) => {
    const nameChild = getName(child);
    const metaChild = _.cloneDeep(getMeta(child));
    if(isFile(child)) {
      child.meta.size = child.meta.size / 2;
      return mkfile(nameChild, _.cloneDeep(getMeta(child)));
    }
    return mkdir(nameChild, getChildren(child),metaChild);
  });

  const newTree = mkdir(name, newChildren, meta)

  return newTree;
};

 console.log(JSON.stringify(compressImages(tree), null, ' '));

// console.log(getChildren(tree));
