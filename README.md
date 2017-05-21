# react-native-myapp

My React Native App

* Install

1. set ANDROID_HOME for android sdk

2. install node.js ( don`t choice Node 7.1 )

3. install python

4. install & setup & init project
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
     react-native init AppDoopp
     git clone https://github.com/koocyton/react-native-myapp.git AppDoopp
     cd AppDoopp
     npm install react-native-scrollable-tab-view --save
     npm install react-native-vector-icons --save
     npm install rnpm
     rnpm link
```

6. edit android/gradle/wrapper/gradle-wrapper.properties
```
     distributionUrl=file:///D:/developer/gradle-2.14.1-all.zip
```

7.  run
```
    (if not exist "%USERPROFILE%/.gradle" mkdir "%USERPROFILE%/.gradle") && (echo org.gradle.daemon=true >> "%USERPROFILE%/.gradle/gradle.properties")  
     react-native run-android
```

* Autobuild for pgyer.com

./autobuild.py -p ../GoodNight.xcodeproj -s GoodNight
