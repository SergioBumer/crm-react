import * as yup from "yup";

const nuevoClienteSchema = yup.object().shape({
  nombre: yup
    .string()
    .min(3, "El nombre es muy corto")
    .max(20, "El nombre es muy largo")
    .required("El nombre del Cliente es Obligatorio"),
  empresa: yup.string().required("El nombre de la empresa es Obligatorio"),
  email: yup
    .string()
    .email("El Email no es válido.")
    .min(5, "El email es muy corto")
    .required("El email del Cliente es Obligatorio"),
  telefono: yup
    .number()
    .integer("Número no válido")
    .positive("Número no válido")
    .typeError("El teléfono no es válido."),
});

export default nuevoClienteSchema;
