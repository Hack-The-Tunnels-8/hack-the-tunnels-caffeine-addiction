import "./ProductPreviewCard.style.scss";

interface Props {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  shipping: string; 
}

function ProductPreviewcard({ title, description, price, imageUrl, shipping}: Props) {
  return (
    <div className="product-preview-card">
      <img className="product-preview-card__image" src={imageUrl} alt={title} />
      <h3 className="product-preview-card__title">{title}</h3>
      <p className="product-preview-card__description">{description}</p>
      <p className="product-preview-card__price">${price}</p>
      <p className="product-preview-card__shipping">Fastest Delivery {shipping}</p>
    </div>
  );
}

export default ProductPreviewcard;
