import { View, StyleSheet } from "react-native";
import ListaDeCompras from "./ListaDeCompras";

type Item = {
  id: string;
  nombre: string;
  completado: boolean;
};

type Props = {
  items: Item[];
  cambiarItem: (id: string) => void;
  eliminarItem: (id: string) => void;
};

export default function ListaContainer({
  items,
  cambiarItem,
  eliminarItem,
}: Props) {
  return (
    <View style={styles.listaContainer}>
      <ListaDeCompras
        items={items}
        alPresionarSobreUnItem={cambiarItem}
        alMantenerPresionSobreUnItem={eliminarItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listaContainer: {
    flex: 1,
    minHeight: 200,
  },
});