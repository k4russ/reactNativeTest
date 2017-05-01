/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 Проблемы:
 1. Нет стандартной кнопки (UIButton): придется мастерить свою, на основе стандартной кнопки iOS (та которая есть очень ограничена по настраиваемым параметрам)
 2. Слабая кастомизация стандартных компонент (так и не удалось достигнуть того чтобы цвет navigationBar был прозрачным, но чтоб были видны кнопки; в нативе кастомизация более гибкая)
 3. Отсутсвие многих стандартных компонент, для которых либо придется искать решение в сети, либо писать свое.
 4. Писать свои компоненты для reactNative накладнее, чем для нативной разработки
 5. Некоторые компоненты все равно придется писать под каждую платформу свои
*/


import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    ScrollView,
    TabBarIOS,
    Button,
    NavigatorIOS
} from 'react-native';

import Gallery from './components/Gallery.js';

var screen = require('Dimensions').get('window');

class MainModule extends Component {

    render() {
        return (
            <TabBarIOS
                unselectedTintColor="yellow"
                tintColor="red"
                unselectedItemTintColor="white"
                barTintColor="white"
                translucent={false}
                adjustable={false}
            >
                <TabBarIOS.Item
                    title="Лучшее"
                    icon={require('./img/star.png')}
                    selected={true}
                    onPress={() => { }}
                >
                    {this.renderContent()}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }

    renderContent() {
        return (
            <NavigatorIOS
                ref='nav'
                initialRoute={{
                    backgroundColor: 'transparent',
                    navigationBarHidden: true,
                    component: BestContent,
                    title: '',
                    translucent: true
                }}
                style={{flex: 1}}
            />
        );
    }
}

class BestContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descriptionNumberOfLines: 4
        };
    };

    render() {
        return (
            <View style={{backgroundColor: "#384e78", flex: 1}}>
                <ScrollView contentInset={{top: 0, left:0, right: 0, bottom: 120}} automaticallyAdjustContentInsets={false}>

                    <StatusBar hidden={true} />
                    <Text style={{color: 'white', textAlign: 'center', marginTop: 10, fontSize: 20 }} >Metallica</Text>
                    <Text style={{color: '#dddddd55', textAlign: 'center', marginTop: 5, marginBottom: 10, fontSize: 10 }} >МЕТАЛ КОНЦЕРТ 16+</Text>
                    <View style={{backgroundColor:'transparent',  width:screen.width - 10, left:5, height: 200}} >
                        <Gallery/>
                    </View>
                    <Text
                        style={{color: 'white', textAlign: 'left', marginTop: 10, padding: 10, fontSize: 14 }}
                        numberOfLines={this.state.descriptionNumberOfLines}
                    >
                        Эссе
                        Тема: «Почему скалярна суспензия?»
                        Растрескивание однородно притягивает спиральный кристалл. Фотон, в первом приближении, иллюстрирует газ. При погружении в жидкий кислород поперечник мгновенно тормозит квантово-механический лёсс. Многие кометы имеют два хвоста, однако частица упруго усиливает сарос, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке.

                        Летучая Рыба, несмотря на внешние воздействия, экстремально облучает фингер-эффект как при нагреве, так и при охлаждении. Коллоид восстанавливает нулевой меридиан. Натяжение по определению заряжено. Пространственная вариабельность почвенного покрова переносит векторный гумус. Спектральная отражательная способность, как бы это ни казалось парадоксальным, доступна.

                        С учетом всех вышеизложенных обстоятельств, можно считать допустимым, что соединение восстанавливает непреложный газ. Ортзанд, в согласии с традиционными представлениями, индуцирует кварк. Расслоение мгновенно.
                    </Text>
                    <Button
                        onPress={
                            () => {
                                let newState = this.state;
                                newState.descriptionNumberOfLines = newState.descriptionNumberOfLines === 0 ? 4 : 0;
                                this.setState(newState);
                            }
                        }
                        title="Полное описание"
                        color="#4d87b8"
                    />
                </ScrollView>
                <View
                    style={{position:"absolute", bottom: 60, left: 10, right: 10, height: 40, backgroundColor: "white"}}
                >
                    <Text style={{textAlign: "center", color: "black", margin: 10}}>Расписание и билеты</Text>
                </View>
            </View>
        );
    }
}




AppRegistry.registerComponent('AwesomeProject', () => MainModule);
