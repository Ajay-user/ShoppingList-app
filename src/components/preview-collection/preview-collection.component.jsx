import React from "react";
import { withRouter } from "react-router-dom";

import "./preview-collection.style.scss";

import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, routeName, items, history, match }) => (
  <div className="preview-collection">
    <div
      className="preview-collection__title"
      onClick={() => {
        history.push(`${match.url}/${routeName}`);
      }}
    >
      {title}
    </div>
    <div className="preview-collection__preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);
