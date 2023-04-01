import { urlFor } from '@/lib/client';
import Link from 'next/link';

export default function Product({ product }) {
  const { slug, image, name, price } = product
  
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={String(urlFor(image && image[0]))}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}