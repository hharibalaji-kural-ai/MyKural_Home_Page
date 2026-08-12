import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import FeatureGrid from "../components/sections/FeatureGrid";
import ProductsOverview from "../components/sections/ProductsOverview";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <Stats /> */}
      {/* <FeatureGrid /> */}
      <ProductsOverview />
      <CTASection />
    </Layout>
  );
}
