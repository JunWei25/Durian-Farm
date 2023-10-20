import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import NoImageAvailable from '../assets/NoImageAvailable.jpg';

const HomeScreen = ({ navigation }) => {
  const currentHour = new Date().getHours();
  let greetingMessage = 'Hello';

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = 'Good afternoon';
  } else if (currentHour >= 17 || currentHour < 5) {
    greetingMessage = 'Good evening';
  }

  const farmsData = [
    { id: '1', name: 'Farm 1', image: NoImageAvailable },
    { id: '2', name: 'Farm 2', image: NoImageAvailable },
    { id: '3', name: 'Farm 3', image: NoImageAvailable },
  ];

  const cashflowData = {
    grossIncome: 5000, 
    expenses: 3000,
    transactions: [
      { id: '1', description: 'Transaction 1', amount: -500 },
      { id: '2', description: 'Transaction 2', amount: 1000 },
      { id: '3', description: 'Transaction 3', amount: -300 },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          {greetingMessage}
        </Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Farms
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {farmsData.map((farm) => (
            <View key={farm.id} style={styles.farmCard}>
              <Image
                source={farm.image}
                style={styles.farmImage}
              />
              <Text style={styles.farmName}>{farm.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.cashflowSection}>
        <Text style={styles.sectionTitle}>
          Cashflow
        </Text>
        <View style={styles.cashflowBoxes}>
          <View style={styles.cashflowBox}>
            <View style={styles.cashflowInnerBox}>
              <Text style={styles.cashflowBoxTitle}>Gross Income</Text>
              <Text style={styles.cashflowBoxAmount}>{`$${cashflowData.grossIncome}`}</Text>
            </View>
            <View style={styles.cashflowSeparator} />
            <View style={styles.cashflowInnerBox}>
              <Text style={styles.cashflowBoxTitle}>Expenses</Text>
              <Text style={styles.cashflowBoxAmount}>{`$${cashflowData.expenses}`}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Latest Transactions</Text>
        <FlatList
          data={cashflowData.transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text>{item.description}</Text>
              <Text style={{ color: item.amount < 0 ? 'red' : 'green' }}>{`$${item.amount}`}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#6bb120',
    padding: 30,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  section: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  farmCard: {
    width: 200,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  farmImage: {
    width: 200,
    height: 120,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  farmName: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cashflowSection: {
    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
  },
  cashflowBoxes: {
    marginBottom: 40,
  },
  cashflowBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cashflowInnerBox: {
    width: '48%',
    textAlign: 'center',
  },
  cashflowBoxTitle:{
    textAlign: 'center',
    marginBottom: 5,
  },
  centeredText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cashflowSeparator: {
    width: 1,
    backgroundColor: 'gray',
  },
  cashflowBoxAmount: {
    fontSize: 20,
    textAlign: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default HomeScreen;
