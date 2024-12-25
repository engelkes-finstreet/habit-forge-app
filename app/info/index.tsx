import { Text } from "@/components/ui/text"; 
import { InfoHeader } from "@/features/info/components/InfoHeader";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView> 
            <InfoHeader heading={"Welcome to HabitForge"}/>
            <View className={"p-4"}>
                <Text>
                    Welcome! You’re about to discover a whole new way of creating positive change in your life, one step at a time. HabitForge was designed to help you build routines that last, by focusing on what truly matters: steady progress and genuine commitment.
                </Text>
                <Text>
                    We believe the best habits are formed when you start small and allow your efforts to grow naturally. Whether you want to read more, exercise consistently, or learn a new skill, HabitForge makes the process simple, approachable, and—most importantly—sustainable.
                </Text>
            </View>
        </SafeAreaView>
    )
}