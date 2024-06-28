// npm install algoliasearch react-instantsearch-dom

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';

// Initialize Algolia search client
const searchClient = algoliasearch('A50UWSCP7X', '6ae9e3b58c9eea39f6aed70049943a3b');

const Hit = ({ hit }) => (
  <div>
    <h2>
      <Highlight attribute="firstname" hit={hit} /> <Highlight attribute="lastname" hit={hit} />
    </h2>
    <p>Zip Code: {hit.zip_code}</p><hr />
  </div>
);

const AlgoliaSearch = () => {
  return (
    <InstantSearch indexName="Logith" searchClient={searchClient} >
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
