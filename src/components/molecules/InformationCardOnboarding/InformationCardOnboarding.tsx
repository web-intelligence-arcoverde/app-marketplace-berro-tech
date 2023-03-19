import {IconComponent, Text, Separator} from '../../';

import {Container, IconContainer} from './style';

interface IInformationCardOnboarding {
  icon: string;
  title: string;
  description: string;
}

export const InformationCardOnboarding = ({
  icon,
  title,
  description,
}: IInformationCardOnboarding) => {
  return (
    <Container>
      <IconContainer>
        <IconComponent icon={icon} />
      </IconContainer>
      <Separator height={20} />
      <Text typography="h3" colorFamily="brand_dark" colorVariant="_01">
        {title}
      </Text>
      <Text typography="h4" colorFamily="brand_dark" colorVariant="_01">
        {description}
      </Text>
    </Container>
  );
};
