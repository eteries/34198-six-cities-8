import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OfferListProps = {
  offersNum: number,
  offers: Offer[]
}

function OffersList({offersNum, offers}: OfferListProps): JSX.Element {
  const [activeCardIndex, changeIndex] = useState(0);
  const handleOnClick = (id: number) => changeIndex(id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .slice(0, offersNum)
        .map((offer) => <OfferCard key={offer.id} offer={offer} isActive={activeCardIndex === offer.id} handleClick={handleOnClick}/>)}
    </div>
  );
}

export default OffersList;
