import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface AppProps {

}

function App({ }: AppProps) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() },]);
  };

  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }


  return (

    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput visible = {modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteGoal={deleteGoalHandler} />
        }}
          keyExtractor={(item, index) => { return item.id }}
          alwaysBounceVertical={false} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});

export default App;