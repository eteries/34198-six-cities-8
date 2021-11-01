import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type NearestOffersProps = {
  offers: Offer[]
}

function NearestOffers({offers}: NearestOffersProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map(
            (offer) => <OfferCard offer={offer} className="near-places__card" key={offer.id} />)}
        </div>
      </section>
    </div>
  );
}

export default NearestOffers;
