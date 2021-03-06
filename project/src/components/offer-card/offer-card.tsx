import { Link } from 'react-router-dom';

import { Offer } from '../../types/offer';
import { convertRatingToPercent } from '../../utils/format-rating';

type OfferCardProps = {
  offer: Offer,
  className?: string,
  onMouseOver?: (id: number) => void
  isActive?: boolean
}

function OfferCard({offer, className = '', onMouseOver, isActive}: OfferCardProps): JSX.Element {
  function handleMouseOver(id: number):void {
    if (typeof onMouseOver === 'function') {
      onMouseOver(id);
    }
  }

  return (
    <article className={`${className} place-card`} onMouseOver={() => handleMouseOver(offer.id)} style={isActive ? {opacity: 0.6} : {}}>
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: convertRatingToPercent(offer.rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.toUpperCase()}</p>
      </div>
    </article>
  );
}

export default OfferCard;
