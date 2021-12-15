import React from 'react';
import styled from 'styled-components';

function Roadmap() {
  return (
    <div className="flex flex-col justify-center items-center space-y-24">
      <h1 className="text-5xl lg:text-7xl">ROADMAP</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-10 lg:space-y-0 ">
        <div className="text-center items-start">
          <h1 className="text-4xl border-b-2  pb-2">BEFORE LAUNCH </h1>
          <StyledP>- Building a Website for Sharks</StyledP>
          <StyledP>- Creating Community Channels</StyledP>
          <StyledP>- Marketing Agreements & Campaigns</StyledP>
          <StyledP>- Giveaways </StyledP>
          <StyledP>- Listings on Marketplaces</StyledP>
          <StyledP>- Building rarity tools and armory</StyledP>
        </div>
        <div className="text-center">
          <h1 className="text-4xl border-b-2  pb-2">LAUNCH</h1>
          <StyledP>- Rarity Tool release</StyledP>
          <StyledP>- Donation to Ocean, Clean Water Charities</StyledP>
          <StyledP>- Armory Launch</StyledP>
        </div>
        <div className="text-center">
          <h1 className="text-4xl border-b-2 pb-2">AFTER LAUNCH</h1>
          <StyledP>- Youtube Lo-fi Radio Channel</StyledP>
          <StyledP>- Community driven comic book ! details on discord</StyledP>

          <StyledP>- Merch Shop Launch</StyledP>
          {/* <StyledP>- A board game for Space Sharks !</StyledP> */}
        </div>
      </div>
    </div>
  );
}

const StyledP = styled.p`
  font-size: 1.3rem;
  padding-bottom: 1rem;
`;

export default Roadmap;
