
import React, { Component } from 'react';
import {
    Image,
    View,
    ScrollView,
} from 'react-native';

import PageControl from 'react-native-page-control';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewWidth: 100,
            viewHeight: 100,
            currentPage: 0
        };
    }

    onScroll(event) {
        var offsetX = event.nativeEvent.contentOffset.x,
            pageWidth = this.state.viewWidth;
        let newState = this.state;
        newState.currentPage = Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1;
        this.setState(newState);
    }

    render() {
        return(
            <View style={{position:"absolute", top:0, left: 0, right: 0, bottom: 0}} onLayout={
                (event) => {
                    var {x, y, width, height} = event.nativeEvent.layout;
                    let newState = this.state;
                    newState.viewWidth = width;
                    newState.viewHeight = height;
                    this.setState(newState)
                }
            }>
                <ScrollView overflow='hidden'
                            ref="ad"
                            pagingEnabled={true}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            bounces={true}
                            onScroll={this.onScroll.bind(this)}
                            scrollEventThrottle={16}
                            style={{position:'absolute', top:0, left:0,bottom:-21, right: 0}}>
                    <Image style={{width: this.state.viewWidth, top: 0, height: this.state.viewHeight - 21, resizeMode: 'cover'}} source={require('../img/img1.jpg')} />
                    <Image style={{width: this.state.viewWidth, top: 0, height: this.state.viewHeight - 21, resizeMode: 'cover'}} source={require('../img/img2.jpg')} />
                    <Image style={{width: this.state.viewWidth, top: 0, height: this.state.viewHeight - 21, resizeMode: 'cover'}} source={require('../img/img3.jpg')} />
                </ScrollView>
                <PageControl style={{position:'absolute', left:0, right:0, bottom:0}}
                             numberOfPages={3}
                             currentPage={this.state.currentPage}
                             hidesForSinglePage={true}
                             pageIndicatorTintColor='#eeeeee55'
                             currentPageIndicatorTintColor='white'
                             indicatorStyle={{borderRadius: 3}}
                             currentIndicatorStyle={{borderRadius: 3}}
                             indicatorSize={{width:6, height:6}}
                             onPageIndicatorPress={this.onItemTap} />
            </View>
        );
    }


    onItemTap(indx) {

    }
}

module.exports = Gallery;
