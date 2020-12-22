import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Settings from '../../assets/icons/settings.svg';
import User from '../../assets/icons/user.svg';
import Moon from '../../assets/icons/moon.svg';
import MapPin from '../../assets/icons/map_pin.svg';
import Plus from '../../assets/icons/plus.svg';

const Menu = ({closeMenu}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemIcon}>
          <User color="#F7F7F7" width={30} height={30} />
        </View>
        <Text style={styles.menuItemText}>User name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemIcon}>
          <MapPin color="#F7F7F7" width={30} height={30} />
        </View>
        <Text style={styles.menuItemText}>Map points</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemIcon}>
          <Settings color="#F7F7F7" width={30} height={30} />
        </View>
        <Text style={styles.menuItemText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemIcon}>
          <Moon color="#F7F7F7" width={30} height={30} />
        </View>
        <Text style={styles.menuItemText}>Dark mode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeBox} onPress={() => closeMenu()}>
        <View style={styles.closeBoxIcon}>
          <Plus color="#F7F7F7" width={40} height={40} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD4949',
    paddingHorizontal: 50.0,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuItemIcon: {
    height: 80.0,
    width: 80.0,
    borderRadius: 80.0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  menuItemText: {
    marginTop: 10.0,
    fontSize: 18.0,
    color: '#F7F7F7',
  },
  closeBox: {
    position: 'absolute',
    right: 15.0,
    top: 15.0,
    transform: [{rotate: '45deg'}],
  },
});

export default Menu;
