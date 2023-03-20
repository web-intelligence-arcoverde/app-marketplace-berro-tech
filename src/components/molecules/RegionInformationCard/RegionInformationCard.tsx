import {IconComponent, Separator, Text} from '../../';

import {Container, IconContainer} from './style';
import React from 'react';

interface IRegionInformationCard {
  backgroundIcon: string;
  icon: string;
  title: string;
  description: string;
}

export const RegionInformationCard = ({
  backgroundIcon,
  icon,
  title,
  description,
}: IRegionInformationCard) => {
  return (
    <Container>
      <IconContainer backgroundColor={backgroundIcon}>
        <IconComponent icon={icon} />
      </IconContainer>
      <Separator height={56} />
      <Text typography="h3" colorFamily="dark" colorVariant="_04">
        {title}
      </Text>
      <Separator height={4} />
      <Text typography="h4" colorFamily="dark" colorVariant="_04">
        {description}
      </Text>
    </Container>
  );
};
