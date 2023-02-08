import { View, Text } from 'react-native'
export default function About({dexEntry}) {


    function getFlavorText() {
        for (let entry of dexEntry) {
            if (entry.language.name === 'en') {
                return entry.flavor_text.replace(/\n/g, " ").replace(/\f/g, " ").toUpperCase();
            }
        }
    }



    return (
        <View>
            {dexEntry !== '' && <Text style={{ padding: '5%', textAlign: 'center' }}>{getFlavorText()}</Text>}

        </View>
    );
}
