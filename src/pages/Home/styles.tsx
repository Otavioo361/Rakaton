// src/pages/Home/styles.tsx
import { StyleSheet } from "react-native";
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.opacity_white,
  },

  header: {
    padding: 16,
  },

  balanceContainer: {
    backgroundColor: colors.dark_purple,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },

  balanceTitle: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  balanceValue: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  scrollArea: {
    marginTop: 80,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },

  buttonContainer: {
    margin: 16,
    alignItems: 'center',
  },

  button: {
    backgroundColor: colors.dark_purple,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },

  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  fileItemText: {
    fontSize: 16,
    color: colors.black,
    marginVertical: 4,
  },
});

export default styles;
