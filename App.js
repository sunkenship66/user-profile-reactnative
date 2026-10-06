import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  // useState hook initialized to 0
  const [likes, setLikes] = useState(0);

  // Task 1: Prevent negative likes using Math.max
  const handleDownvote = () => {
    setLikes((prevLikes) => Math.max(0, prevLikes - 1));
  };

  // Task 2: Reset function
  const handleReset = () => {
    setLikes(0);
  };

  return (
    <View style={styles.container}>
      {/* Profile Card */}
      <View style={styles.card}>
        <Image source={require('./assets/me.png')} style={styles.avatar} />
        
        {/* Step 4.1 Your Turn: Replace with your actual details */}
        <Text style={styles.name}>Sangay Wangchuk</Text>
        <Text style={styles.subtitle}>BE Information Technology · Year 3</Text>
        <Text style={styles.bio}>
          Passionate about mobile development and building clean user experiences.
        </Text>

        {/* Likes Row */}
        <View style={styles.likesRow}>
          <Ionicons name="heart" size={22} color="#d64545" />
          <Text style={styles.likesText}>{likes} likes</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.row}>
          {/* Upvote Button with press feedback (Task 4) */}
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={() => setLikes(likes + 1)}
          >
            <Ionicons name="arrow-up" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Upvote</Text>
          </Pressable>

          {/* Downvote Button with press feedback (Task 4 & Task 1) */}
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={handleDownvote}
          >
            <Ionicons name="arrow-down" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Downvote</Text>
          </Pressable>

          {/* Task 2: Reset Button with different color & refresh icon */}
          <Pressable
            style={({ pressed }) => [styles.resetButton, pressed && styles.pressed]}
            onPress={handleReset}
          >
            <Ionicons name="refresh" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Reset</Text>
          </Pressable>
        </View>

        {/* Task 3: Conditional message when likes >= 10 */}
        {likes >= 10 && (
          <Text style={styles.popularMessage}>You're popular!</Text>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#14213d',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4, 
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fca311',
  },
  subtitle: {
    fontSize: 14,
    color: '#e5e5e5',
    marginTop: 4,
  },
  bio: { 
    fontSize: 15,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 20,
  },
  likesText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#fca311',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 70,
  },
  resetButton: {
    backgroundColor: '#e63946', // Distinct color for Reset button
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 70,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  // Task 4: Pressed opacity state
  pressed: {
    opacity: 0.6,
  },
  // Task 3: Styling for popular message
  popularMessage: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fca311',
  },
});