import React from 'react';
import './_visitCard.scss';

export interface VisitCardProps {
  name: string;
  location: string;
  src: string;
  following: number;
  followers: number;
  posts: number;
}

export function VisitCard(props: VisitCardProps) {
  return (
    <div className="visit-card">
      <div className="visit-card__header">
        <div className="visit-card__header__picContainer">
          <img className='visit-card__header__picContainer__img' src={props.src} />
        </div>
        <div className="visit-card__header__name">{props.name}</div>
        <div className="visit-card__header__location">{props.location}</div>
      </div>
      <div className="visit-card__body">
        <div className="visit-card__body__infos">
          <div className="visit-card__body__infos__rapid">
            <span className='visit-card__body__infos__rapid__title'>Following</span>
            <span className='visit-card__body__infos__rapid__amount'> {props.following}</span>
          </div>
          <div className="visit-card__body__infos__rapid">
            <span className='visit-card__body__infos__rapid__title'>Followers</span>
            <span className='visit-card__body__infos__rapid__amount'> {props.followers}</span>
          </div>
          <div className="visit-card__body__infos__rapid">
            <span className='visit-card__body__infos__rapid__title'>Posts</span>
            <span className='visit-card__body__infos__rapid__amount'> {props.posts}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
