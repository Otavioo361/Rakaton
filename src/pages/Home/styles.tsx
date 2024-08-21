import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    borderRadius: 16,
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#1a1a1a",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#ffff"
  },
  buttonContainer: {
    marginTop: 20, // Adiciona espaço acima do botão
  },
  button: {
    backgroundColor: '#36691D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  ticketContainer: {
    marginBottom: 20,
  },
  ticketHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  ticketCount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  movementsContainer: {
    flex: 1,
    borderRadius: 16,
    marginBottom: 10,
    paddingTop: 20,
    paddingHorizontal: 80,
    backgroundColor: '#1a1a1a'

  },
  movementsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  movementText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#ffff'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#36691D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default styles;
