import Fuse from 'fuse.js'

import dataSpeed from '../data/speed.json';
import dataFeed from '../data/feed.json';
import dataValidInsert from '../data/validInserts.json';

function getDataFeed(insert) {
  insert = insert.toLocaleLowerCase();

  let findFeed = dataFeed.find(
    (elm) => {
      if (elm.insert.toLocaleLowerCase() === insert) {
        return true;
      }
      return false;
    }
  );

  return findFeed;
}

function getDataSpeed(grade) {
  let findSpeed = dataSpeed.find(
    (elm) => {
      if (elm.grade === grade) {
        return true;
      }
      return false;
    }
  );

  return findSpeed;
}

function getValidInsert(insert) {
  let listGrades = [];
  let validInsert = '';

  listGrades = dataValidInsert.filter(
    (elm) => {
      if (elm.insert.toLocaleLowerCase() === insert.toLocaleLowerCase()) {
        return true;
      }

      return false;
    }
  ).map(
    (elm) => {
      validInsert = elm.insert;
      return elm.grade;
    }
  );

  let result = {
    insert: validInsert,
    listGrades: listGrades
  }

  return result;
}

function getValidFeed(dataSpeed, dataFeed) {
  let apps = ['P', 'M', 'K', 'N', 'S', 'H', 'O'];
  let validFeed = {};

  if (!dataSpeed) dataSpeed = {};
  if (!dataFeed) dataFeed = {};
  
  for (let app of apps) {
    // if (dataSpeed['app_' + app] && (dataFeed['fz_min_' + app] && dataFeed['fz_min_' + app])) {
    if (dataSpeed['app_' + app]) {
      validFeed['fz_min_' + app] = dataFeed['fz_min_' + app];
      validFeed['fz_max_' + app] = dataFeed['fz_max_' + app];
    }
  }

  return validFeed;
}

const fuseSearchOptions = {
  // isCaseSensitive: false,
  includeScore: true,
  // shouldSort: true,
  includeMatches: true,
  // findAllMatches: false,
  // minMatchCharLength: 5,
  // location: 0,
  threshold: 0.6,
  distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: [
    'insert'
  ]
};

const fuse = new Fuse(dataFeed, fuseSearchOptions);

function fuseSearchInsert(insert) {
  let result = [];
  let search = fuse.search(insert);
  let maxResult = 10;
  
  if (search.length === 0) return [];

  if (search.length < maxResult) {
    maxResult = search.length;
  }
  
  for (let i = 0; i < maxResult; i++) {
    result.push(search[i].item.insert);
  }

  return result;
}

export default { 
  getDataFeed,
  getDataSpeed,
  getValidInsert,
  getValidFeed,
  fuseSearchInsert
};