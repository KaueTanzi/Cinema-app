import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";


export default function Header() {
    return(
        <View style={styles.headerContainer}>
            <View>
                <View style={styles.brandGroup}>
                    <View style={styles.logoBadge}>
                        <Ionicons name ="film" size={22} color="#FF3366"></Ionicons>
                    </View>
                    <View>
                        <Text style={styles.brandTitle}>
                            Cine<Text style={styles.brandHighLight}>App</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 16,
    },
    logoBadge:{
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: "rgba(255, 51, 102, 0.12)",
        borderWidth: 1,
        borderColor: "rgba(255, 51, 102, 0.25)",
        alignItems: "center",
        justifyContent: "center",
    },
    brandTitle:{
        fontSize: 24,
        fontWeight: "900",
        color: "#ffffff",
        letterSpacing: 0.5,
    },
    brandHighLight:{
        color: "#ff3366"
    },
    brandGroup:{
        flexDirection:"row",
        alignItems:"center",
        gap: 12,
    },
});