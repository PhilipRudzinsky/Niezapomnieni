import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const JanCz = () => {
    const biography = `Jan Czochralski (ur. 23 października 1885 w Kcyni, zm. 22 kwietnia 1953 w Poznaniu) – polski chemik, metaloznawca, wynalazca metody hodowli monokryształów (metoda Czochralskiego), która pozwoliła na rozwój nowoczesnej elektroniki.`;

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/jan_czochlarski.jpg')}
            />
            <Text style={styles.title}>Jan Czochralski</Text>
            <Text style={styles.biography}>{biography}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    biography: {
        fontSize: 16,
    },
    logo: {
        height: windowHeight* 0.3,
        resizeMode: 'contain',
        marginBottom: windowHeight* -0.015,
    },
});

export default JanCz;