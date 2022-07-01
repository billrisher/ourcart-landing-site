import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const storeLink = "https://billrisher.com"

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Our Cart
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            A collaborative shopping cart designed for busy lives
          </p>
          <p className="mt-8 md:mt-12">
            <a href="https://ourcart.app.link/30j11Xokirb"><Button size="lg">Download Now</Button></a>
          </p>
          <p className="mt-4 text-gray-600">Available on iPhone and Android devices</p>
        </div>
        <div className="lg:w-1/2">
          {/**<HeroImage />**/}
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Shared Carts</p>
              <p className="mt-4">
                Add and remove your friends and family to your carts with ease.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Intuitive Interface</p>
              <p className="mt-4">
                Our Cart just works, no need to worry about setting anything up.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Real-Time Updates</p>
              <p className="mt-4">
                Know exactly what everyone needs, even if you're already at the store.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to Make Shopping Together Easier?</h3>
      <p className="mt-8 text-xl font-light">
        Download Our Cart on the Apple App Store or the Android Play Store now!
      </p>
      <p className="mt-8">
        <a href="https://ourcart.app.link/30j11Xokirb"><Button size="xl">Shop Together</Button></a>
      </p>
    </section>
  </Layout>
);

export default Index;
