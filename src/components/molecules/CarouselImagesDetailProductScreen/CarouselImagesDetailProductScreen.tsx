import {Dimensions, Image} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useAppSelector} from '../../../hooks';
import {scale} from '../../../utils';
const {width} = Dimensions.get('screen');

import {useState} from 'react';

export const CarouselImagesDetailProductScreen = () => {
  const {product} = useAppSelector(state => state.product);

  let documents = product.products[0].documents;

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item, index}: any) => {
    return (
      <Image
        style={{width: width, height: scale(300), resizeMode: 'cover'}}
        source={{
          uri: item.url,
        }}
      />
    );
  };

  return (
    <>
      <Carousel
        layout={'default'}
        data={documents}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        style={{position: 'relative'}}
        onSnapToItem={index => setActiveIndex(index)}></Carousel>
      <Pagination
        dotsLength={documents.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          position: 'absolute',
          top: scale(330),
          width: '100%',
        }}
        dotStyle={{
          width: scale(8),
          height: scale(8),
          borderRadius: scale(5),
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{
          width: scale(8),
          height: scale(8),
          borderRadius: scale(5),
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.9}
      />
    </>
  );
};
