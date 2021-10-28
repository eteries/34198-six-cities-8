import Logo from '../Logo';
import UserMenu from '../user-menu/user-menu';
import { useParams } from 'react-router-dom';
import { offers } from '../../mocks/offers';
import NotFound from '../not-found/not-found';
import OfferCard from '../offer-card/offer-card';
import ReviewForm from '../review-form/review-form';
import { IMG_PATH } from '../../constants';

function Offer(): JSX.Element {
  const {id} = useParams<{id?: string}>();
  const offer = offers.find((item) => item.id.toString() === id);

  if (!offer) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <UserMenu />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={`${IMG_PATH}${image}`} alt="Studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating*20}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.rooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.equipment.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.userName}
                  </span>
                  {offer.host.isPro ? (
                    <span className="property__user-status">
                      Pro
                    </span>
                  ) : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">
                    {offer.reviews.length}
                  </span>
                </h2>
                <ul className="reviews__list">
                  {offer.reviews.map((review) => (
                    <li className="reviews__item" key={review.id}>
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={`${IMG_PATH}${review.author.avatar}`} width="54" height="54" alt="Reviews avatar" />
                        </div>
                        <span className="reviews__user-name">
                          {review.author.userName}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: review.rating}} />
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {review.text}
                        </p>
                        <time className="reviews__time" dateTime="2019-04-24">{review.date.toDateString()}</time>
                      </div>
                    </li>
                  ))}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.map((place) => <OfferCard offer={place} className="near-places__card" key={place.id} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
