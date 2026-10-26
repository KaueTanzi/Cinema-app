import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type CategotyButtonProps = {
    title: String;
    selected: boolean;
    onPress: ()=> void;
};

export default function CategoryButton({
    title, 
    selected, 
    onPress
}:CategotyButtonProps){
    return(
        <Pressable 
        onPress={onPress} 
        style={[
            styles.button,
            selected ? styles.buttonSelected : styles.buttonUnselected
        ]}
        >
        {selected && (
            <Entypo name="dot-single" size={16} color="#ffffff"></Entypo>
        )}
            <Text>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
   
})