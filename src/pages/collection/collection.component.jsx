import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  if (!collection) return null;

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.collectionId)(state),
});

const ConnectedCollectionPage = connect(mapStateToProps)(CollectionPage);

const CollectionPageContainer = () => {
  const { collectionId } = useParams();
  return <ConnectedCollectionPage collectionId={collectionId} />;
};

export default CollectionPageContainer;
