import Swal from 'sweetalert2';

export class Notificaciones{


    static enviarNotificacion( notificacion: Opcion, texto? : string ) : void | Promise<boolean> {

        switch( notificacion ){

            case Opcion.error:
                Swal.fire('error','Ha ocurrido un error','error')
            break;

            case Opcion.errorCustom:
                Swal.fire('error', texto ,'error')
            break;

            case Opcion.exitoCustom:
                Swal.fire('Exito', texto ,'success')
            break;

            case Opcion.exitoCustomReload:
                Swal.fire('Exito', texto ,'success').then( then => window.location.reload() )
            break;

            case Opcion.confirma:

                let valor = Swal.fire({
                    title: '¿Confirmar?',
                    text: `${texto}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si',
                    cancelButtonText: 'No'
                  }).then((result: any) => {
                    if (result.isConfirmed) {
                      return true;
                    }

                    return false;
                  })

                return valor;
            break;
        }

    }

}

export enum Opcion{
    error = 'error',
    errorCustom = 'errorCustom',
    exitoCustom = 'exitoCustom',
    exitoCustomReload = 'exitoCustomReload',
    confirma = 'confirma'

}
