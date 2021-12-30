import React, { useEffect } from 'react';
import { Header } from '_app/features/Header/Header';
import { FooterPattern } from '_app/components/FooterPattern/FooterPatern';
import { Footer } from '_app/features/Footer/Footer';
import { loadPlayersMatches } from '_app/utils';
import { useAppDispatch } from '_app/core/redux';
import { getHeroes } from '_app/features/Heroes/heroesSlice';

interface Props {
  children: React.ReactNode;
}

export function Screen({ children }: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    loadPlayersMatches(dispatch);
    dispatch(getHeroes());
  }, [dispatch]);
  return (
    <>
      <Header />
      <section className="content">
        {children}
        <FooterPattern />
      </section>
      <Footer />
    </>
  );
}
