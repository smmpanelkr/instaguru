import React, { Suspense, lazy } from "react";
import Header from "../components/Header";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import channels from "../data/categories.json";

const AutoSlider = lazy(() => import("../components/AutoSlider"));
const ItemCard = lazy(() => import("../components/ui/ItemCard"));
const WelcomePopup = lazy(() => import("../components/ui/WelcomePopup"));

const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-20"></div>
      <Suspense fallback={<SkeletonLoader type="banner" />}>
        <WelcomePopup />
        <AutoSlider />
      </Suspense>
      <div className="text-center mt-6">
        <p className="text-lg font-semibold mt-4 mb-2 gradient-text">
          Explore our services and their plans.
        </p>
      </div>

      <div>
        {channels.map((channel, index) => (
          <Suspense 
            key={index}
            fallback={<SkeletonLoader type="card" />}
          >
            <ItemCard {...channel} />
          </Suspense>
        ))}
      </div>
      
      <div className="my-5">
        <p className="text-center text-sm text-gray-500">
          &copy; 2025 All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Home;