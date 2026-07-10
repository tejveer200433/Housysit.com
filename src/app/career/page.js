"use client";

import { useState } from "react";
import CareerHero from "@/components/career/CareerHero";
import WhyJoinUs from "@/components/career/WhyJoinUs";
import OpenPositions from "@/components/career/OpenPositions";

export default function Career() {
  const [showJobs, setShowJobs] = useState(false);

  return (
    <>
      <CareerHero onShowJobs={() => setShowJobs(true)} />

      <WhyJoinUs />

      {showJobs && <OpenPositions />}
    </>
  );
}