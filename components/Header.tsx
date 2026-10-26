import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";


export default function Header() {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.topRow}>
                <View style={styles.brandGroup}>
                    <View style={styles.logoBadge}>
                        <Ionicons name ="film" size={22} color="#FF3366"></Ionicons>
                    </View>
                    <View>
                        <Text style={styles.brandTitle}>
                            Cine<Text style={styles.brandHighLight}>App</Text>
                            </Text>
                            <Text style={styles.BrandSubtitle}>Catálogo & Streaming</Text>
                    </View>
                </View>
                <View style={styles.userBadge}>
                    <Ionicons name="sparkles" size={16} color="#ffb800"></Ionicons>
                    <Text style={styles.userBadgeText}>Em alta</Text>
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
    topRow:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
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
    BrandSubtitle:{
        fontSize: 12,
        fontWeight: 500,
        color: "#94a3d8"
    },
    brandHighLight:{
        color: "#ff3366"
    },
    brandGroup:{
        flexDirection:"row",
        alignItems:"center",
        gap: 12,
    },
    userBadge:{
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        backgroundColor: "rgba(255, 284, 0, 0.12)",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255,284, 0 , 0.25)",
    },
    userBadgeText:{
        fontSize: 12,
        fontWeight: "700",
        color: "#ffb800"

    }
});