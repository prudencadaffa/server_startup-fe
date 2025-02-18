import React from "react";
import Header from "../components/Header";
import HowToUse from "../components/Home/HowToUse";
import NewProject from "../components/Home/NewProject";
import Testimoni from "../components/Home/Testimoni";
import CallToAction from "../components/Home/CallToAction";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="px-24">
      <Header home={true}></Header>
      <HowToUse></HowToUse>
      <NewProject></NewProject>
      <Testimoni></Testimoni>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
}
