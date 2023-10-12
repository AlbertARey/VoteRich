<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="card">
        <DataTable class="userTable" scrollHeight="60vh" :loading="loading" v-model:filters="filters" resizableColumns
            columnResizeMode="fit" scrollable :value="Registro" sortMode="multiple" tableStyle="min-width: 50rem" paginator
            :rows="15"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[15, 25, 50]"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} personas" dataKey="CEDULA">
            <template #header>
                <div class="flex justify-content-between align-items-center">
                    <div>
                        <ButtonP label="Agregar" @click="newProfile()"  icon="pi pi-plus" rounded
                        style="background-color: rgb(0, 56, 128)" size="small">Agregar</ButtonP>
                    </div>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText  class="p-inputtext-sm" placeholder="Buscar..." />
                    </span>
                </div>
            </template>
            <template #empty> No se han encontrado usuarios. </template>
            <Column field="id" header="#" :resizable="false"></Column>
            <Column field="NOMBRE" header="Nombre" sortable :resizable="false"></Column>
            <Column field="CEDULA" header="Cédula" sortable :resizable="false"></Column>
            <Column field="CIRCUNSCRIPCION" sortable header="Circunscripción" :resizable="false" style="width: 5px"></Column>
            <Column field="COLEGIOELECTORAL" sortable header="Colegio" :resizable="false" style="width: 15px"></Column>
            <Column field="RECINTOELECTORAL" sortable header="Recinto" :resizable="false" style="width: 15px"></Column>
            <Column field="DM" sortable header="DM" :resizable="false" style="width: 15px"></Column>
            <Column styleClass="col-icon" :expander="true" frozen class="text-center p-0" style="padding: 0 !important"
                :headerStyle="{ 'text-align': 'center' }">
                <template #header>
                    <div class="w-100 text-center my-2">
                        <span>Acciones</span>
                    </div>
                </template>
                <!-- <template #body="{ data }">
                    <div class="w-100 text-center">
                        <Button v-tooltip.top="{ value: 'Editar', showDelay: 2000, hideDelay: 300 }" plain text
                           class="btn-outline p-1 mx-1">
                            <span color="#003880" class="far fa-edit p-button-icon"></span>
                        </Button>

                        <Button v-tooltip.top="{ value: 'Eliminar', showDelay: 2000, hideDelay: 300 }" plain text
                             class="btn-outline p-1 mx-1" severity="danger">
                            <span class="far fa-trash-alt p-button-icon"></span>
                        </Button>
                    </div>
                </template> -->
            </Column>

        </DataTable>
       

        <DialogP v-model:visible="perfilNewVisible" header="Nuevo Usuario" :style="{ width: '60vw' }" maximizable modal>
            <div class="dialogContent">             
                <div class="flex flex-column gap-2 p-2" style="margin: 0px 10px;">
                    <label class="font-bold" for="descripcion">Nombre:</label>
                    <InputText v-model="nombre"  aria-describedby="username-help" />
                </div>
                <div class="flex flex-column gap-2 p-2" style="margin: 0px 10px;">
                    <label class="font-bold" for="descripcion">Cédula:</label>
                    <InputText v-model="Cedula"  aria-describedby="username-help" />
                </div>
                <div class="flex flex-column gap-2 p-2" style="margin: 0px 10px;">
                    <label class="font-bold" for="descripcion">Circunscripción:</label>
                    <InputText v-model="Circunscripcion"  aria-describedby="username-help" />
                </div>
                <div class="flex flex-column gap-2 p-2" style="margin: 0px 10px;">
                    <label class="font-bold" for="descripcion">Colegio:</label>
                    <InputText v-model="Colegio"  aria-describedby="username-help" />
                </div>
                <div class="flex flex-column gap-2 p-2" style="margin: 0px 10px;">
                    <label class="font-bold" for="descripcion">Recinto:</label>
                    <InputText v-model="Recinto"  aria-describedby="username-help" />
                </div>
                <div class="flex flex-column gap-2 p-2" style="margin: 0px 10px;">
                    <label class="font-bold" for="descripcion">DM:</label>
                    <InputText v-model="DM"  aria-describedby="username-help" />
                </div>
            </div>

            <template #footer>
                <ButtonP label="Guardar" @click="saveNewProfile(actualNew)" icon="pi pi-save"  />
            </template>
        </DialogP>
        <ConfirmPopup />
    </div>
</template>

<script>
import { FilterMatchMode } from "primevue/api";
// import { FilterMatchMode } from "primevue/api";

// import { useConfirm } from "primevue/useconfirm";


import supabase from '@/supabase'

export default {
  data() {
    return {
        filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
      Registro: [],  
      perfilNewVisible: false,    
      nombre: "",
      Cedula:"",
      Circunscripcion:0,
      Colegio: 0,
      Recinto: "",
      DM:"",
    };
  },
  mounted() {
    this.fetchDatosDeTabla();
  },
  methods: {
    async fetchDatosDeTabla() {
      try {
        const { data, error } = await supabase.from('RegistroVotante').select('*');
        
        if (error) {
          throw error;
        }
        this.Registro = data;               
      } catch (error) {
        console.error('Error al obtener datos de la tabla:', error.message);
      }
    },
    newProfile() {           
            this.perfilNewVisible = true;
        },
        
        async saveNewProfile(){            
            const { data, error } = await supabase
            .from('RegistroVotante')
            .insert(
                [
                    { 
                        CEDULA: this.Cedula,
                        NOMBRE: this.nombre,
                        CIRCUNSCRIPCION: this.Circunscripcion,
                        COLEGIOELECTORAL: this.Colegio,
                        RECINTOELECTORAL: this.Recinto,
                        DM: this.DM
                    },
                ]
            )
            .select()
            console.log(data, error);
                
        }
  }
  
};

</script>



<style>
.p-toast-message-content {
    font-size: small;
}

.icon {
    width: 1%;
    height: 1%;
}

.center-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.userTable td,
th {
    padding: 0.5rem !important;
}

.picklistName {
    font-size: 14px;
}

.picklistURL {
    color: #a7a7a7;
    font-size: small;
}
</style>