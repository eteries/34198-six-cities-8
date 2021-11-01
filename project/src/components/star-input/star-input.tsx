import { RATINGS } from './ratings';
import { ChangeEvent } from 'react';

type StarRatingProps = {
  name: string,
  onChange: (value: string) => void
}

function StarInput({name, onChange}: StarRatingProps): JSX.Element {
  return (
    <>
      {RATINGS
        .sort((itemA, itemB) => itemB.id - itemA.id)
        .map(({id, label}) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name={name}
              value={id}
              id={`star-${id}`}
              type="radio"
              onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) => onChange(value)}
            />
            <label htmlFor={`star-${id}`} className="reviews__rating-label form__rating-label" title={label}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </>
        ))}
    </>
  );
}

export default StarInput;
