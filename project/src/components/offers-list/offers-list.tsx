import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OfferListProps = {
  offersNum: number,
  offers: Offer[]
  onActiveOfferChange: (id: number) => void
}

function OffersList({offersNum, offers, onActiveOfferChange}: OfferListProps): JSX.Element {
  const [activeCardIndex, changeIndex] = useState(0);
  const handleMouseOver = (id: number) => {
    changeIndex(id);
    onActiveOfferChange(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .slice(0, offersNum)
        .map((offer) => (
          <OfferCard key={offer.id}
            offer={offer}
            className="cities__place-card"
            onMouseOver={handleMouseOver}
            isActive={activeCardIndex === offer.id}
          />
        ))}
    </div>
  );
}

export default OffersList;
