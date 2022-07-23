react native schwarz
what is rn
react + react native => native app
react // js lib, platform agnostic
react native // special react component, that will compill into native api

div // android.view // UIView // View
input // editText // UITextField // TextInput

the app:
ui element compiled on native element
logic, hosted by react native in the app, running on a thread

expo cli // third part, some tool, managed app development, easier, can go out to expo
rn cli // bare bone dev, harder, easy to integrate native code

expo init myproj
npm start

app.json // config for expo

NO CSS
=> inline style
=> StyleSheet Object // optimized, autocompletion, validation and better organization, better not mix jsx and css

View // container, no text 
Text // for text // block
<Button title="clickHere" />

en rn pas de short css props genre background: 1px solid red 
faut les mettre manuellement
backgroundColor
backgroundWidth: 2 // 2px
etc...

<TextInput placeholder="davai" value={statenString}/>

layout and flexbox:
elements are positionned inside a container
flexDirection // row, column
justifyContent
alignItems

flex: 1 // sutilise sur dans un container sur un element 
=> ca calcule le nombre de flex et ca divise lespace en fonction // ca split lespace dispo apres avoir tt fonction

events handler:
TextInput => onTextChange 
Button => onPress

pas dheridite css comme en web
une view na pa les meme props css qu un text donc pas dheredite
generalement on wrapp dans une view avec du css pour eviter les differences entre android/ios

les <View></View> ne sont pas scrollable:
=> <ScrollView></ScrollView>
tricks pour bon layout:
un container View qui est sized type flex: 1, avec a linterieur une scrollview
props scrollview ios pour pouvoir scroll only if needed: alwaysBounceVertical={false}

FlatList to optimize array display with good options
=> only render visible item
<FlatList>
=> data // array
=> renderItem // fn qui doit return le jsx a display // (itemData) => <JSX /> // itemData.index: index de litem // itemData.item => litem entier
=> les key sont managed automatiquement avec FlatList si les item sont un obj avec un props key.
=> autre facons de generer la key via la props keyExtractor={(item, index) => item.id } // fn qui doit renvoyer la valeur qui servira de key

pour passer un param direct: onPress={onDeleteItem.bind(this, id)}

ptit effet opacity
android: 
android_ripple={{ color: "#210644" }} // prop de <Pressable>
ios:
style={({ pressed }) => pressed && styles.pressedItem}> // on change le style qd on a linfo que c'est pressed

Modal
visible={booleanState} animationType="slide"


Image
source={require("../assets/images/goal.png")} // dynamique path from the current file to the assets folder // rn check and use native size of the local image
source={{uri: 'httpxxxx'}} // for extern image // need to force image style (height width)
style={style.image} // width height et margin

"backgroundColor": "#1e085a" // dans app.json // expo appliquera ce background a toutes les screens


import { StatusBar } from "expo-status-bar"; 
<StatusBar style="light" /> // status bar en blanc genre batterie 4g etc...

debugging via ui
debugging via console
debugging remotely // ctrl m debugg on chrome // ctrl shift J
debugging using react dev tool // npm install -g react-devtools // react-devtools on terminal in the right folder
debugging using official docs

css en rn
boxshadow nexiste pas
=> elevation // android
=> shadowColor: 'black', shadowOffset: {width: 0, height: 2}, shadowRadius: 6, shadowOpacity: 0.25 // ios

TextInput // props maxLength={2} // pour max 2 chars ds le TextInput
          // props keyboardType // depend of ios/android // pr avoir num keyboard etc...
          // props autoCapitalize="none"
	      // props 	autoCorrect={false}

css : on peut passer un [objcss1, objcss2]
dans un Pressable on peut passer a style une fonction ({ pressed }) => ({styletoApply)} // pressend renvoi un booleen pour styler en fonction de letat du button (pratique pour effect on ios)

flexbox in rn // default is flexDirection: 'column'

expo install expo-linear-gradient
<LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
    xxx
</LinearGradient>

<ImageBackground  // ImageBackground est une combinaison de view + image
                source={require("./assets/images/background.png")} // source de limage
				resizeMode="cover" // mode de limage
				style={styles.rootScreen} // style sur la view
				imageStyle={styles.backgroundImage}> // style sur limage
    xxx
</ImageBackground>

import { Ionicons } from "@expo/vector-icons";
<Ionicons name="md-remove" size={24} color='white'/>

pas dheredite css en rn
pour la simuler on pass un objet style en prop et le composant recoit cette prop style et la merge avec son actuel style={[classicStyle, propStyle]}

custom fonts with expo:
expo install expo-font
// charger les fonts dans /assets/fonts/
import { useFonts } from 'expo-font';
load sur App.js // make disponible in entier app
useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
})

expo-app-loading // loader pour charger les fichiers via expo

on peut wrapp du text dans du text (span style styling) <Text> dans du <Text> DAVAII </Text></Text>
ya un genre dheritage css dans le meme element genre Text dans Text // facon intern de fonctionner

Responsivness:
minWidth
maxWidth
can be combined with width
{ Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("screen").width ; // in android, include the status bar
const deviceWidth = Dimensions.get("window").width ; // in android, exclude status bar
margin: deviceWidth < 450 ? 12 : 24,

Orientation:
app.json // orientation: "portrait" by default // lock vertical
                         "landscape" // lock horizontal
                         "default" // can switch
to build for orientation, use Dimensions API with device.height // margin
=> marginTop: deviceHeight < 400 ? 30 : 100,
attention, Dimensions.get() // excuted once if not on component, result depend of the orientation of the phone 
better way 
=> import { useWindowDimensions } from 'react-native'
const { width, height } = useWindowDimensions();
and use marginTop value on component, margin the value into the css object, not directly on the original StyleSheet.create object
const marginTopDistance = height < 380 ? 30 : 100;
return 
<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>

Keyboard IOS pass sur le content en landscape
=> { KeyboardAvoidingView } from 'react-native';
on wrapp lapp dedans // faudra stayler KeyboardAvoidingView en flex: 1
<KeyboardAvoidingView style={styles.screen} behavior="  > // position, fau un scrollview qui wrapp tte lapp et le keyboard pour lapp qui est display
app
</KeyboardAvoidingView>

Platform
import { Platform } from 'react-native';
borderWidth: Platform.OS === 'android' ? 2 : 0,
ou
borderWidth: Platform.select({
    ios: 0,
    android: 2,
})
Title.android.js // rn will take this file for android
Title.ios.js // rn will take this file for ios

{ StatusBar } from 'expo-status-bar'
=> pour show la statusbar et la couleur // <StatusBar style="light"/>

ios // shadow, need un background to work

Navigation:
react-navigation // available for rn raw and expo
npm install @react-navigation/native
si on use expo:
expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from "@react-navigation/native";
on wrapp lapp (pas la statusbar)
on need un navigator
-stack
etc
expo install @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator(); // en dehors du composant, renvoi 2 props qui sont des composants de navigation, Navigator et Screens
<Stack.Navigator screenOptions={}>
    <Stack.Screen name="MealsCategories" component={CategoryScreen} options={{ title: 'Meals Category', headerTintColor: "white", headerStyle: { backgroundColor: '#cccccc'}}}/> // Categories nom dla screen // CategoryScreen, reference au component a display // les options sont pour override le design par default
</Stack.Navigator>
// la first Stack.Screen est la screen par default , on peu aussi set la props initialRouteName="screenXX" sur le Stack.Navigator
// ca include un header et un background sur la screen et une safearea
// les screenOptions set dans le navigator seront appliquer a toutes les screens
// les options set dans une screen seront appliquer a cette screen
les screens recoivent une props navigation
=> pour naviger sur une autre screen:
navigation.navigate('screenXX', context); // le context est extractable via { route } et route.params 
on peut aussi utiliser le hook { useNavigation } from '@react-navigation/native';
const navigation = useNavigation(); // hook style  pratique on nested component to avoid navigation props drilling
const route = useRoute(); // hook style, pratique on nested component to avoid route props drilling
