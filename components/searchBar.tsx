import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, TextInput } from "react-native";


type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
    onClear: () => void;
};

export default function searchBar({
    value, 
    onChangeText, 
    onClear
}:SearchBarProps) {
    return(
        <View style={styles.container}>
            <Ionicons name="search" size={20 }color="#94a3b8"></Ionicons>

            <TextInput style={styles.input} 
            placeholder="Buscar filme por titulo" 
            placeholderTextColor="#64748b"
            autoCapitalize="none" 
            autoCorrect={false}
            onChangeText={onChangeText}
            value={value}></TextInput>

            {value?.length > 0 && onClear && (
                <Pressable onPress={onClear}>
                <Ionicons name="close-circle" size={18} color="#94a3b8"></Ionicons>
            </Pressable>
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#161a28",
        alignItems: "center",
        height: 52,
        flexDirection: "row",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#262d42",
        paddingHorizontal: 16,
        marginHorizontal: 20,
    },
    input:{
        flex: 1,
        color: "#ffffff",
        fontWeight: "500",
        fontSize: 15,
        marginLeft: 10,
    },
})