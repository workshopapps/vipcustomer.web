import styled from "styled-components";

const FooterWrapper = styled.main`
  background-color: #091540;
  padding: 5rem 5rem;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  display: flex;
  gap: 2rem;

  .footimg img {
    object-fit: cover;
  }

  .footbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .footbarone {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .footlink {
    font-weight: 300;
  }

  @media (max-width: 997px) {
    padding: 1.5rem 2rem;
    flex-direction: column;

    .footbar {
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: space-between;
    }
  }
`;

export default FooterWrapper;
