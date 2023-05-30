import {ProductItemDescriptionFooter} from '../../';

import {ContainerFoorterDescription} from './style';

interface IFooterDescriptionProduct {
  gender?: any;
  ageCategory?: any;
  classification?: any;
}

export const FooterDescriptionProduct = ({
  gender,
  ageCategory,
  classification,
}: IFooterDescriptionProduct) => {
  return (
    <ContainerFoorterDescription>
      <ProductItemDescriptionFooter title="Sexo" description={gender} />
      <ProductItemDescriptionFooter
        title="Idade"
        description={ageCategory?.name}
      />
      <ProductItemDescriptionFooter
        title="Classificação"
        description={classification?.name}
      />
    </ContainerFoorterDescription>
  );
};
