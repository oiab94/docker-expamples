import { syncDB } from "../tasks/sync-db.task";

describe( 'Prueba de Sync-DB', () => {
  test( 
    'Debe ejecutar el proceso 2 veces', 
    () => {
      const times = syncDB();

      console.log( 'Se llamo ', times );
  } );
} )
