import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

// interface GoalItemProps {
//     text: string;
//     onDeleteGoal: (id: string) => void;
// }

function GoalItem(props) {


    return (
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText} >{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    }
});

export default GoalItem;