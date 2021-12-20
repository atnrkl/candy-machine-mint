import React from 'react';
import styled from 'styled-components';
import venusShark from '../images/BG_sample_VENUS.png';
import marsShark from '../images/BG_sample_MARS.png';
import eternalShark from '../images/BG_sample_ETERNAL.png';
import galacticShark from '../images/BG_sample_GALACTIC.png';
import earthShark from '../images/BG_sample_EARTH.png';
import rocketship from '../images/rocketship.png';

function MiddleSection() {
  return (
    <div className="flex flex-col  lg:grid  lg:grid-cols-2  lg:gap-16">
      <div className="lg:space-x-10 bg-transparent space-y-2 text-center py-10 ">
        <StyledEarth className="text-2xl lg:text-4xl">
          UNITED STATES OF EARTH
        </StyledEarth>
        <div className="flex flex-col lg:flex-row  lg:space-x-5 items-center justify-center m-0">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 z-20">
            <img className="rounded-full" src={earthShark} alt="venus shark" />
          </div>
          <div className="w-72 lg:w-96 h-60 lg:h-36 text-left text-lg md:text-xl font-normal ">
            <LoreText>
              All planets are corrupt and out of control. The brotherhood is
              broken. For the sake of the system, we need to get them under
              control now. It's up to us to restore order. Our armies are more
              ready for war than ever before. Our entire planet has come
              together and we can't wait to put these barbarians in their place.
            </LoreText>
          </div>
        </div>
      </div>
      <div className="lg:space-x-10 bg-transparent space-y-2 text-center py-10 ">
        <StyledInvaders className="text-2xl lg:text-4xl">
          GALACTIC INVADERS
        </StyledInvaders>
        <div className="flex flex-col lg:flex-row  lg:space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 z-20">
            <img
              className="rounded-full"
              src={galacticShark}
              alt="venus shark"
            />
          </div>
          <div className="w-72 lg:w-96 h-60 lg:h-36 text-left text-lg md:text-xl font-normal m-0">
            <LoreText>
              At the Emperor's behest, we were assigned to explore and occupy
              new systems. We entered the system called the "Solar System" We
              are always ready to fight to expand our Galactic Empire. Against
              our technology, we will rule the entire galaxy! We will conquer
              this wretched system in the name of our empire.
            </LoreText>
          </div>
        </div>
      </div>
      <div className="lg:space-x-10 bg-transparent space-y-2 text-center py-10 m-0">
        <StyledMars className="text-2xl lg:text-4xl">
          MARS MINING OPERATIONS
        </StyledMars>
        <div className="flex flex-col lg:flex-row lg:space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 z-20">
            <img className="rounded-full" src={marsShark} alt="venus shark" />
          </div>
          <div className="w-72 lg:w-96 h-60 lg:h-36 text-left text-lg md:text-xl font-normal">
            <LoreText className="m-0">
              Your Operation collecting slaves from all over the System. Our
              planet needs sharkonium mines to power the colonies of Mars. Dust
              storms, temperature and difficult living conditions, These
              difficulties won't stop our operation, raids on Venus and Earth,
              will continue.
            </LoreText>
          </div>
        </div>
      </div>
      <div className="lg:space-x-10 bg-transparent space-y-2 text-center py-10 m-0">
        <StyledVenus className="text-2xl lg:text-4xl">
          VENUS SWAMP SYNDICATE
        </StyledVenus>
        <div className="flex flex-col lg:flex-row  lg:space-x-5 items-center justify-center">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 z-20 ">
            <img className="rounded-full " src={venusShark} alt="venus shark" />
          </div>
          <div className="w-72 lg:w-96 h-60 lg:h-36 text-left text-lg md:text-xl font-normal ">
            <LoreText>
              The syndicate needs new victims to strengthen its power in the
              system. Syndicate mages continue to evolve with the spells they
              have used since their ancient ancestors. Venus bounty hunters
              attack Mars and Earth and hand over their loot to the mighty
              sorcerers. Great mages with their life spells make Venus Syndicate
              members habitable in their toxic seas.
            </LoreText>
          </div>
        </div>
      </div>
      <div className="pt-24 lg:space-x-10 bg-transparent space-y-2 text-center py-10 lg:col-span-2 ">
        <StyledEternals className="text-2xl lg:text-4xl">
          ETERNALS
        </StyledEternals>
        <div className="flex flex-col lg:flex-row  lg:space-x-5 items-center justify-center m-0">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 z-20">
            <img
              className="rounded-full"
              src={eternalShark}
              alt="venus shark"
            />
          </div>
          <div className="w-72 lg:w-96 h-60 lg:h-36 text-left text-lg md:text-xl font-normal">
            <LoreText>
              The Firstborns of the Cosmos blessed us and we ascended. We've
              traveled to thousands of galaxies. There is nothing we haven't
              seen. We created suns and destroyed planets. No formation
              satisfies us anymore. We travel the whole cosmos looking for
              something that will excite us.
            </LoreText>
          </div>
        </div>
      </div>
      <div className="pt-24 lg:space-x-10 bg-transparent space-y-2 text-center py-10 lg:col-span-2 ">
        <StyledEternals className="text-2xl lg:text-4xl">
          ROCKET SHIPS
        </StyledEternals>
        <div className="flex flex-col lg:flex-row  lg:space-x-5 items-center justify-center m-0">
          <div className="rounded-full w-36 h-36 lg:w-44 lg:h-44 z-20">
            <img className="rounded-full" src={rocketship} alt="venus shark" />
          </div>
          <div className="w-72 lg:w-96 h-60 lg:h-36 text-left text-lg md:text-xl font-normal">
            <LoreText>
              555 total supply rocket ships designed for your favorite Solana
              PFPs
            </LoreText>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledVenus = styled.h1`
  font-family: 'Trade Winds', cursive;
`;

const StyledMars = styled.h1`
  font-family: 'Wallpoet', cursive;
`;

const StyledEarth = styled.h1`
  font-family: 'Orbitron', sans-serif;
`;

const StyledInvaders = styled.h1`
  font-family: 'Russo One', sans-serif;
`;
const StyledEternals = styled.h1`
  font-family: 'Audiowide', cursive;
`;

const LoreText = styled.p``;

export default MiddleSection;
