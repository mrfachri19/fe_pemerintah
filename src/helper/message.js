// import React from 'react'
import Swal from 'sweetalert2'

export const Messaege = (title,msg,icon) => {
    Swal.fire({
        title: title,
        text: msg,
        icon: icon,
        timer: 1500,
        showConfirmButton: false,
      })
}


