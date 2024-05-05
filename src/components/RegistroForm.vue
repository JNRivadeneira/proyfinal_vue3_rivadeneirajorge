<template>
  <Vueform>
    <StaticElement name="titulo">
      <h1>Crear cuenta</h1>
    </StaticElement>
    <GroupElement
      name="informacionPersonal"
      label="Información Personal"
    >
      <TextElement
        name="nombre"
        placeholder="Nombre"
        rules="required"
        :columns="6"
      />
      <TextElement
        name="apellido"
        placeholder="Apellido"
        rules="required"
        :columns="6"
      />
      <!-- </GroupElement> -->
      <!-- <GroupElement name="informacionCuenta" label=""> -->
      <TextElement
        name="email"
        placeholder="Email"
        rules="required|email|max:255"
        :debounce="300"
        validate-on="change"
      />
      <DateElement
        name="fechaNacimiento"
        placeholder="Fecha de nacimiento"
        rules="required"
      />
      <TextElement
        name="password"
        input-type="password"
        placeholder="Contraseña"
        :rules="[
          'required',
          'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/',
          'confirmed',
        ]"
        :debounce="300"
        :messages="{
          regex:
            'La contraseña debe tener al menos 8 caracteres y contener al menos un número, una mayúscula, y una minúscula.',
        }"
      />
      <TextElement
        name="password_confirmation"
        input-type="password"
        placeholder="Repite Contraseña"
        rules="required"
      />
    </GroupElement>

    <ToggleElement
      name="notificame"
      :default="true"
    >
      Quiero recibir correos con ofertas especiales. Podés desuscribirte en
      cualquier momento.
    </ToggleElement>
    <ButtonElement
      name="crearUsuario"
      add-class="mt-2"
      submits
    >
      Crear
    </ButtonElement>
    <StaticElement name="linkToLogin">
      <router-link to="/login">
        Ya tengo una cuenta
      </router-link>
    </StaticElement>
  </Vueform>
</template>

<script>
import { Vueform, useVueform } from "@vueform/vueform";

export default {
  mixins: [Vueform],
  setup: useVueform,

};
</script>

<style scoped>

</style>