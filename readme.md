# Comandos básicos

## Listar devides

- emulator -list-avds

## Rodar devices

- emulator -avd avd_name

## Instalar dependencias no ios

- npx pod-install

## Limpar task do projeto

- cd android ./gradlew clean

## Guias

- https://www.youtube.com/watch?v=V1M39hKE_D8
- https://www.youtube.com/watch?v=9ji4-ie2c1Y


## Clear 

rm -rf $HOME/.gradle/caches/
cd android && ./gradlew cleanBuildCache
cd ..
cd ios && pod cache clean --all && rm -rf build
cd ..
rm -rf node_modules
yarn cache clean --force
yarn install
cd ios && pod install