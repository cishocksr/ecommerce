import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className='collection-item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <div className='nam'>{name}</div>
      <div className='price'>{price}</div>
    </div>
  </div>
);

export default CollectionItem;
