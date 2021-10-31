import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type NearestOffersProps = {
  offers: Offer[],
  current: Offer,
  max: number
}

function NearestOffers({offers, current, max}: NearestOffersProps): JSX.Element | null {
  const filteredOffers = offers
    .filter(({city}) => city.id === current.city.id)
    .filter(({id}) => id !== current.id)
    .slice(0, max);

  return (
    filteredOffers ? (
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {filteredOffers.map(
              (offer) => <OfferCard offer={offer} className="near-places__card" key={offer.id} />)}
          </div>
        </section>
      </div>
    ): null
  );
}

export default NearestOffers;
