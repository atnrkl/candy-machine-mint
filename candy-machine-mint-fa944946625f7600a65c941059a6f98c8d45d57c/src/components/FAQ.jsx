import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import transitions from '@material-ui/core/styles/transitions';

const FAQ = () => {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);

  const [accordion5, setAccordion5] = useState(false);

  return (
    <div className="items-center justify-center text-center space-y-10 md:space-y-10">
      <h1 className="text-4xl lg:text-7xl border-b-2 py-4">FAQ</h1>

      {/* //? what is eternals */}
      <StyledFAQcontainer isOpen={accordion1}>
        <h1
          className="text-2xl flex flex-row items-center justify-center lg:space-x-10 text-center lg:cursor-pointer "
          onClick={() => setAccordion1(!accordion1)}
        >
          <p>WHAT IS ETERNALS ?</p>
          <FaArrowDown id="arrow" />
        </h1>
        <StyledDropdown isOpen={accordion1}>
          <StyledAnswer className="py-5">
            Eternals are a rare faction of Space Sharks
          </StyledAnswer>
        </StyledDropdown>
      </StyledFAQcontainer>
      {/* //? when mint */}
      <StyledFAQcontainer isOpen={accordion2}>
        <h1
          className="text-2xl flex flex-row items-center justify-center lg:space-x-10 text-center lg:cursor-pointer "
          onClick={() => setAccordion2(!accordion2)}
        >
          <p>WHEN MINT ?</p>
          <FaArrowDown id="arrow" />
        </h1>
        <StyledDropdown isOpen={accordion2}>
          <StyledAnswer className="py-5">30 NOVEMBER 18:00 UTC</StyledAnswer>
        </StyledDropdown>
      </StyledFAQcontainer>

      {/* //? what is mint pirce */}
      <StyledFAQcontainer isOpen={accordion3}>
        <h1
          className="text-2xl flex flex-row items-center justify-center lg:space-x-10 text-center lg:cursor-pointer "
          onClick={() => setAccordion3(!accordion3)}
        >
          <p>MINT PRICE ?</p>
          <FaArrowDown id="arrow" />
        </h1>
        <StyledDropdown isOpen={accordion3}>
          <StyledAnswer className="py-5">0.3 SOL</StyledAnswer>
        </StyledDropdown>
      </StyledFAQcontainer>

      {/* //? game 
      <StyledFAQcontainer isOpen={accordion4}>
        <h1
          className="text-2xl flex flex-row items-center justify-center lg:space-x-10 text-center lg:cursor-pointer "
          onClick={() => setAccordion4(!accordion4)}
        >
          <p>GAME ?</p>
          <FaArrowDown id="arrow" />
        </h1>
        <StyledDropdown isOpen={accordion4}>
          <StyledAnswer className="py-5">
            We're working on details, story will be in Space Sharks universe
            obviously, Roadmap after launch
          </StyledAnswer>
        </StyledDropdown>
      </StyledFAQcontainer> */}
      {/* //? listings */}
      <StyledFAQcontainer isOpen={accordion5}>
        <h1
          className="text-2xl flex flex-row items-center justify-center lg:space-x-10 text-center lg:cursor-pointer "
          onClick={() => setAccordion5(!accordion5)}
        >
          <p>LISTINGS ?</p>
          <FaArrowDown id="arrow" />
        </h1>
        <StyledDropdown isOpen={accordion5}>
          <StyledAnswer className="py-5">
            Planned to be on Solanart, Magic Eden, Exchange.art and Digitaleyes.
          </StyledAnswer>
        </StyledDropdown>
      </StyledFAQcontainer>
    </div>
  );
};

const StyledFAQcontainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 5rem;
  margin: 0;
  @media (max-width: 700px) {
    height: 300px;
    width: 300px;
  }

  #arrow {
    transition: all 0.3s ease-in;
    transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
  }
`;

const StyledDropdown = styled.div`
  transition: all 0.3s ease-in-out;

  display: ${props => (props.isOpen ? 'block' : 'none')};

  @media (max-width: 700px) {
    height: 300px;
    width: 100%;
  }
`;

const StyledAnswer = styled.p`
  font-size: 1.2rem;
`;
export default FAQ;
