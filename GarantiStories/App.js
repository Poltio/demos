import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableHighlight,
    Dimensions,
    WebView,
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            storyTop: height,
            uri: 'https://stage.poltio.com/e/poll/150242?share=off&notify=off',
        };
    }
    onPress = () => {
        this.setState({
            storyTop: 0,
            uri: null,
        });
    }
    onPressPoltio = () => {
        this.setState({
            storyTop: 0,
            uri: 'https://stage.poltio.com/e/poll/150242?share=off&notify=off',
        })
    }
    onPressPoltio2 = () => {
        this.setState({
            storyTop: 0,
            uri: 'https://stage.poltio.com/e/poll/149810?share=off&notify=off',
        })
    }
    onClose = () => {
        this.setState({
            storyTop: height,
            uri: null,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    alignItems: 'flex-start'
                }}>Stories</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={styles.storyBox} >
                    <TouchableHighlight onPress={this.onPress} style={styles.storyImageCont}>
                        <Image source={require('./assets/g.png')} style={styles.storyImg} />
                    </TouchableHighlight>

                    <Text>Regular Story</Text>
                </View>
                <View style={styles.storyBox} >
                    <TouchableHighlight onPress={this.onPressPoltio} style={styles.storyImageCont}>
                        <Image source={require('./assets/g.png')} style={styles.storyImg} />
                    </TouchableHighlight>
                    <Text>Poltio 1</Text>
                </View>
                <View style={styles.storyBox} >
                    <TouchableHighlight onPress={this.onPressPoltio2} style={styles.storyImageCont}>
                        <Image source={require('./assets/g.png')} style={styles.storyImg} />
                    </TouchableHighlight>
                    <Text>Poltio 2</Text>
                </View>
            </View>
            <View style={{
                width,
                height,
                backgroundColor: 'black',
                position:'absolute',
                top: this.state.storyTop,
            }}>

            <TouchableHighlight onPress={this.onClose} style={{
                    margin: 15,
                    alignItems: 'flex-end',
                    zIndex: 50,
                    position: 'absolute',
                    top: 0,
                    width: 50,
                    height: 50,
                    right: 0,
            }}>
                    <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>X</Text>
            </TouchableHighlight>
            <View style={{
                position:'absolute',
                width,
                height,
                zIndex: 1,
            }}>
                { this.state.uri ?
                <WebView
                    source={{uri: this.state.uri}}
                />
                :
                <Text style={{color: 'white', alignItems: 'center', justifyContent:'center'}}>Regular Story Content</Text>
                }
            </View>
        </View>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    storyBox: {
        backgroundColor: 'white',
        margin: 10,
    },
    storyImageCont: {
        borderRadius: 15,
        borderColor: 'powderblue',
        borderWidth: 2,
    },
    storyImg: {
        width: 80,
        height: 80,
        margin: 2,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
    },
});
