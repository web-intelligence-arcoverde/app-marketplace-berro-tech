import React from 'react';
import {TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {Text, IconComponent, Separator, Button} from '../../';

import {scale} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {removeFile} from '../../../store/reducer/product/actions';
import {usePickFileHook} from '../../../hooks/usePickFileHook';

export const ListFiles = () => {
  const {onButtonPress} = usePickFileHook();

  const dispatch = useAppDispatch();
  const {files} = useAppSelector(state => state.product);

  let limitFiles = files.length <= 5;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: scale(20),
        paddingVertical: scale(20),
      }}>
      <View
        style={{
          paddingHorizontal: scale(20),
          paddingVertical: scale(28),
          borderWidth: 1,
          borderColor: '#F2F1F7',
          borderRadius: 6,
        }}>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          Você fez upload de {files.length} arquivos
        </Text>
        <Separator height={4} />
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Clique no icone da lixeira para removê-lo
        </Text>
      </View>
      <ScrollView
        style={{
          marginTop: 10,
          paddingHorizontal: scale(20),
          paddingVertical: scale(28),
          borderWidth: 1,
          borderColor: '#F2F1F7',
          borderRadius: 6,
        }}>
        {files.map((document, index) => {
          return (
            <View style={{position: 'relative'}}>
              <Image
                source={{uri: document.uri}}
                style={{
                  width: '100%',
                  height: 120,
                  borderRadius: 6,
                  marginBottom: 12,
                }}
              />
              {index === 0 && (
                <View
                  style={{
                    position: 'absolute',
                    top: 16,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    borderRadius: 6,
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    left: 16,
                  }}>
                  <Text typography="h5" colorFamily="gray" colorVariant="_01">
                    Capa
                  </Text>
                </View>
              )}

              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  borderRadius: 6,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}
                onPress={() => dispatch(removeFile(index))}>
                <IconComponent icon="delete-icon" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          width: '98%',
        }}>
        <TouchableOpacity
          onPress={() => onButtonPress()}
          style={{
            width: 56,
            height: 56,
            flexDirection: 'column',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#F2F1F7',
            borderRadius: 6,
            justifyContent: 'center',
          }}>
          <IconComponent icon="arrow-left" />
        </TouchableOpacity>
        <Separator width={20} />
        <View style={{width: '78%'}}>
          <Button
            disabled={!limitFiles}
            title="Próximo"
            variant="containedThirdy"
            onPress={() => console.log('aq')}
          />
        </View>
      </View>
    </View>
  );
};
