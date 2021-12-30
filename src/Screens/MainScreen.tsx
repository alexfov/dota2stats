import React from 'react';
import { Header } from '_app/features/Header/Header';
import { Table } from '_app/features/Table/Table';
import { FooterPattern } from '_app/components/FooterPattern/FooterPatern';
import { Footer } from '_app/features/Footer/Footer';

interface Props {}

export function MainScreen({}: Props) {
  return (
    <>
      <Header />
      <section className="content">
        <Table />
        <FooterPattern />
      </section>
      <Footer />
    </>
  );
}
