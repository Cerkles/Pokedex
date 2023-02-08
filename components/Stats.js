import { View, Text, StyleSheet } from 'react-native'
import Scaling from '../Scaling';
import typeColor from '../TypeColors';

export default function Stats({stats, type1}) {


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
                <View style={styles.stats}>
                    {stats.length !== 0 && stats.map((stat) =>
                        <View style={styles.statContainer}>
                            <Text>{capitalizeFirstLetter(stat.stat.name)
                                .replace("ecial-", ". ").replace("attack", "Atk").replace("defense", "Def")}: </Text>
                            <Text style={styles.statValues}>{stat.base_stat}</Text>
                            <View style={styles.valueBar}>
                                <View style={[styles.statBar,
                                { backgroundColor: typeColor(type1), maxWidth: "100%", width: stat.base_stat * .9 }]} />

                            </View>
                        </View>
                    )}
                </View>
    );
}

const styles = StyleSheet.create({
statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: "1%"
},
stats: {
    marginTop: "3%",
    marginLeft: "5%",
},
statValues: {
    position: "absolute",
    left: Scaling.windowWidth * 0.17
},
valueBar: {
    position: "absolute",
    left: Scaling.windowWidth * 0.25,
    height: Scaling.windowWidth * 0.03,
    flexDirection: "row",
    width: Scaling.windowWidth * 0.63,
    backgroundColor: 'white',
    borderRadius: 10,
},
statBar: {
    height: '100%',
    flexDirection: "row",
    borderRadius: 10,
},
})