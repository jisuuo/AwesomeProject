import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Yours course goal!' style={styles.TextInput} onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style = {styles.buttonContainer}>
                    <Button title='Add Goal' style={styles.AddModal} onPress={addGoalHandler} />
                    <Button title='Cancel' />
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
    }
});

export default GoalInput;