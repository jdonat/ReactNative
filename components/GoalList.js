import { StatusBar } from 'expo-status-bar';
import {useEffect, useState} from 'react';
import { Dimensions, SafeAreaView, ScrollView, Image, Modal, Pressable, TouchableOpacity, Button, TextInput, StyleSheet, Text, View } from 'react-native';




export default function GoalList() {

  const goalsList = [
    {id: 0, goal: "Faire les courses"},
    {id: 1, goal: "Aller à la salle de sport 3 fois par semaine"},
    {id: 2, goal: "Monter à plus de 5000m d altitude"},
    {id: 3, goal: "Acheter mon premier appartement"},
    {id: 4, goal: "Perdre 5 kgs"},
    {id: 5, goal: "Gagner en productivité"},
    {id: 6, goal: "Apprendre un nouveau langage"},
    {id: 7, goal: "Faire une mission en freelance"},
    {id: 8, goal: "Organiser un meetup autour de la tech"},
    {id: 9, goal: "Faire un triathlon"},
  ];
  
  const [text, setText] = useState('');
   const [editText, setEditText] = useState('');
  const [goals, setGoal] = useState(goalsList);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalAddVisible, setModalAddVisible] = useState(false);
   const [modalEditVisible, setModalEditVisible] = useState(false);
  let itemSelected;
  
  function addGoal(goals, text)
  {
     setModalAddVisible(!modalAddVisible);
     let lastIndex = goals.length-1;
     let nextId = goals[lastIndex].id;
     nextId++;
    setGoal([...goals, {id: nextId, goal: text}]);
   setText('');
  }
  function removeGoal(goals)
  {
   setModalDeleteVisible(!modalDeleteVisible);
   setGoal(goals.filter((goal) => goal.id !== this.itemSelected));
  }
  function displayModalDeleteGoal(id)
  {
      setModalDeleteVisible(true);
      this.itemSelected = id;
  }
  function displayModalAddGoal()
  {
      setModalAddVisible(true);
  }
  function displayModalEditGoal(id, edittext)
   {
      setModalEditVisible(true);
      setEditText(edittext);
      this.itemSelected = id;
   }
   function editGoal(goals, edittext)
   {
      setModalEditVisible(!modalEditVisible);
      let index = goals.findIndex((el) => el.id === this.itemSelected);
      goals.splice(index, 1, {id: index, goal: edittext});
      setGoal(goals);
   }
   function closeAddModal()
   {
      setModalAddVisible(!modalAddVisible);
      setText('');
   }
   function closeDeleteModal()
   {
      setModalDeleteVisible(!modalDeleteVisible);
   }
   function closeEditModal()
   {
      setModalEditVisible(!modalEditVisible);
   }
  useEffect(() => {

    console.log("goals :", goals)
  },[goals])

  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.red}>TP1 TODOList <Text style={styles.bold}>App</Text></Text>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDeleteVisible}
        onRequestClose={() => {
          setModalDeleteVisible(!modalDeleteVisible);
        }}>
         <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Voulez-vous vraiment supprimer cet objectif ?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => removeGoal(goals)}>
              <Text style={styles.textStyle}>Supprimer</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeDeleteModal()}>
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddVisible}
        onRequestClose={() => {
          setModalAddVisible(!modalAddVisible);
        }}>
         <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput 
               style={styles.input}
               onChangeText={setText}
               value={text}
               placeholder='Ajouter un objectif'
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => addGoal(goals, text)}>
              <Text style={styles.textStyle}>Ajouter</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeAddModal()}>
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEditVisible}
        onRequestClose={() => {
          setModalEditVisible(!modalEditVisible);
        }}>
         <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput 
               style={styles.input}
               onChangeText={setEditText}
               value={editText}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => editGoal(goals, editText)}>
              <Text style={styles.textStyle}>Modifier</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeEditModal()}>
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      

      <View style={styles.addButton}>
        <Button
          title="Ajouter un objectif"
          onPress={() => displayModalAddGoal()}
        />
      </View>

      {goals.map((item,i) => 

        <View style={styles.goal}>
          <Text style={styles.item} key={i}>{item.goal}</Text>
          <TouchableOpacity onPress={() => displayModalDeleteGoal(item.id)}>
            <Text style={styles.removeButton}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>displayModalEditGoal(item.id, item.goal)}>
            <Image style={styles.imagestyle} source={require('../assets/edit.png')} />
         </TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
    </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  scrollView: {
   backgroundColor: '#ffe',
   paddingBottom: 20,
   marginHorizontal: 20,
   alignItems: 'center',
   justifyContent: 'center',
  },
  red: {
    color: 'red',
    fontSize: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  item: {
    color: 'black',
    maxWidth: Dimensions.get('window').width - 100
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  goal: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    maxWidth: Dimensions.get('window').width - 20
  },
  removeButton: {
    height: 25,
    width: 25,
    paddingLeft: 7,
    paddingTop: 3,
    margin: 5,
    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 4
  },
    modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
   buttonClose: {
    backgroundColor: '#2196F3',
  },
   button: {
    borderRadius: 20,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  imagestyle: {
   height: 30,
   width: 30,
   marginBottom: 4
  },
  addButton: {
   paddingTop: 20
  }
});