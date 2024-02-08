import algoliasearch from "algoliasearch";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import Autocomplete from "./Autocomplete";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
const AppAutocomplete = ({ algoliaAppId, algoliaAppKey }) => {
  const searchClient = algoliasearch(algoliaAppId, algoliaAppKey);

  return (
    <div className="app-container mb-4">
      <Autocomplete
        openOnFocus={false}
        getSources={({ query }) => [
          {
            sourceId: "products",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "trips",
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </div>
  );
};
AppAutocomplete.propTypes = {
  algoliaAppId: PropTypes.string.isRequired,
  algoliaAppKey: PropTypes.string.isRequired,
};
export default AppAutocomplete;
