# react-native-myapp

My React Native App

* Install

1. set ANDROID_HOME for android sdk

2. install node.js ( don`t choice Node 7.1 ) and rnpm
```
     npm install rnpm
```

3. install python

4. install & setup & init project
```
     (if not exist "%USERPROFILE%/.gradle" mkdir "%USERPROFILE%/.gradle") && (echo org.gradle.daemon=true >> "%USERPROFILE%/.gradle/gradle.properties")
```

```
     npm config set registry https://registry.npm.taobao.org --global
     npm config set disturl https://npm.taobao.org/dist --global
     npm install -g yarn react-native-cli
     yarn config set registry https://registry.npm.taobao.org --global
     yarn config set disturl https://npm.taobao.org/dist --global
     react-native init AppDoopp
```

5. install plugin for this project
```
     git clone https://github.com/koocyton/react-native-myapp.git AppDoopp2
     cp -R AppDoopp2/* Appdoopp/
     rm -rf AppDoopp2
     cd AppDoopp
     npm install react-native-scrollable-tab-view --save
     npm install react-native-vector-icons --save
     rnpm link
```

6. edit android/gradle/wrapper/gradle-wrapper.properties
```
     distributionUrl=file:///D:/developer/gradle-2.14.1-all.zip
```

7.  build & run
```
     react-native run-android
```

* Autobuild for pgyer.com

./autobuild.py -p ../AppDoopp.xcodeproj -s AppDoopp
