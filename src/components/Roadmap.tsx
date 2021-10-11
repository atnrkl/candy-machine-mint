import React from 'react';
import styled from 'styled-components';

function Roadmap() {
  return (
    <div className="flex flex-row    w-full justify-evenly  ">
      <div className="text-center space-y-2">
        <h1 className="text-4xl border-b-2">PRE LAUNCH</h1>
        <StyledP>Building a Website for Sharks</StyledP>
        <StyledP>Creating Community Channels</StyledP>
        <StyledP>Marketing Agreements & Campaigns</StyledP>
        <StyledP>Giveaways</StyledP>
        <StyledP>Listings on Marketplaces</StyledP>
        <StyledP>Building rarity tools and armory</StyledP>
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-4xl border-b-2">LAUNCH</h1>
        <StyledP>Rarity Tool release</StyledP>
        <StyledP>Donation to Ocean, Clean Water Charities</StyledP>
        <StyledP>Armory Launch</StyledP>
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-4xl border-b-2">AFTER LAUNCH</h1>
        <StyledP>Youtube Lo-fi Radio Channel</StyledP>
        <StyledP>First Phase of Event for Eternal Holders</StyledP>
        <StyledP>
          Special Gift Box for Eternals and Clan Leaders Holders
        </StyledP>
        <StyledP>Merch Shop Launch</StyledP>
      </div>
    </div>
  );
}

const StyledP = styled.p`
  font-size: 1.2rem;
`;

export default Roadmap;