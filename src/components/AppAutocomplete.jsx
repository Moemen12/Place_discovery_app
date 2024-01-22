import algoliasearch from "algoliasearch";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import Autocomplete from "./Autocomplete";
import ProductItem from "./ProductItem";

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

export default AppAutocomplete;
