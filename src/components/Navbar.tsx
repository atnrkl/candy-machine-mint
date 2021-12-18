import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-center relative w-full h-60   ">
        <StyledHeader className="text-5xl lg:text-7xl ">
          SOLANA BLUE CHIP ROCKET SHIP
        </StyledHeader>
      </nav>
    </div>
  );
};

const StyledHeader = styled.h1`
  font-family: "Changa", sans-serif;
`;

export default Navbar;
