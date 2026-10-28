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
            <Text style={[
                styles.title,
                selected ? styles.titleSelected :styles.titleUnSelected
                ]}
                >
                {title}
                </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
   button:{
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 24,
    marginTop: 10,
    
   },
   buttonSelected:{
    backgroundColor: "#ff3366",
    borderWidth: 1,
    borderColor: "#ff4c7b",
   },
   buttonUnselected:{
    backgroundColor: "#161a28",
    borderWidth: 1,
    borderColor: "#262d42",
   },
   title:{
    fontSize: 13,
    fontWeight: "700",
   },
   titleSelected:{
    color:"#ffffff",
   },
   titleUnSelected:{
    color:"#94a3b8"
   }

});