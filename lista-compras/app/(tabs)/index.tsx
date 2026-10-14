import Contenedor from "../../components/Contenedor";
import TituloDeLaPagina from "../../components/TituloDeLaPagina";
import FormularioParaItemNuevo from "../../components/FormularioParaItemNuevo";
import ListaContainer from "../../components/ListaDeCompras/ListaContainer";
import useItemsDeCompra from "../../hooks/usarItemsDeCompra";

export default function App() {
  const { items, agregarItem, cambiarItem, eliminarItem } = useItemsDeCompra();

  return (
    <Contenedor>
      <TituloDeLaPagina />

      <ListaContainer
        items={items}
        cambiarItem={cambiarItem}
        eliminarItem={eliminarItem}
      />

      <FormularioParaItemNuevo
        alCompletarFormulario={agregarItem}
      />
    </Contenedor>
  );
}