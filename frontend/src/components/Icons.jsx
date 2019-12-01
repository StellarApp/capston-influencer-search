import styled from "styled-components";

const Icon = styled.div`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
`;

const FollowerIcon = styled(Icon)`
  background-image: url(../../assets/images/icon/follower.svg);
  background-repeat: no-repeat;
`;
const ImpressionIcon = styled(Icon)`
  background-image: url(../../assets/images/icon/impression.svg);
  background-repeat: no-repeat;
`;
const LocationIcon = styled(Icon)`
  background-image: url(../../assets/images/icon/location.svg);
  background-repeat: no-repeat;
`;

export { Icon, FollowerIcon, ImpressionIcon, LocationIcon };
