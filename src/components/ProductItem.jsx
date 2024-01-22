const ProductItem = ({ hit, components }) => {
  const { id, slug } = hit;
  return (
    <a href={`/trip/${id}/${slug}`} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
};

export default ProductItem;
