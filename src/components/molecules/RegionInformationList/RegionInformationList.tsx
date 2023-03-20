import {ScrollView} from 'react-native';
import {RegionInformationCard} from '../../';
import {regionInformationData} from '../../../mock';

export const RegionInformationList = () => {
  return (
    <ScrollView horizontal={true}>
      {regionInformationData.map(item => {
        return <RegionInformationCard {...item} />;
      })}
    </ScrollView>
  );
};
