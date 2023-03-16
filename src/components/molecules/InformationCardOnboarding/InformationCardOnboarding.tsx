import {IconComponent, Text, Separator} from '../../';

import {CardContainer, IconContainer} from './style';

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
    <CardContainer>
      <IconContainer>
        <IconComponent icon={icon} />
      </IconContainer>
      <Separator height={16} />
      <Text typography="h3" colorFamily="brand_dark" colorVariant="_01">
        {title}
      </Text>
      <Text typography="h4" colorFamily="brand_dark" colorVariant="_01">
        {description}
      </Text>
    </CardContainer>
  );
};
