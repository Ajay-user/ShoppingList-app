import React from "react";

// style
import "./shop.scss";

// conponent
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const Shop = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default Shop;
