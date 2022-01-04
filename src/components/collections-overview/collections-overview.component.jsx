import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// selector
import { selectShopCollections } from "../../redux/shop/shop.selector";

// style
import "./collections-overview.style.scss";

// component
import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
