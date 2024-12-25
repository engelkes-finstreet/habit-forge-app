import { View } from "react-native";

import { Heading } from "@/components/ui/heading";

type Props = {
    heading: string;
}

export function InfoHeader({heading}: Props) {
    return (
        <View className={"h-[150px] bg-red-500 flex-row"}>
            <View className={"w-3/4"}>
                <Heading size={"xl"}>Welcome to HabitForge</Heading> 
            </View>
            <View className={"w-1/4 h-full bg-blue-500"}/>
        </View>
    )
}