import Swal from "sweetalert2";

const AlertService = {};

AlertService.success = (options) => {
  return new Promise((resolve, reject) => {
    resolve(
      Swal.fire(
        Object.assign(
          {
            confirmButtonText: "ปิด",
            confirmButtonColor: "#014B82",
            icon: "success",
            width: "40%",
          },
          options
        )
      )
    );
  });
};
AlertService.info = (options) => {
  return new Promise((resolve, reject) => {
    resolve(
      Swal.fire(
        Object.assign(
          {
            confirmButtonColor: "#014B82",
            icon: "info",
            width: "40%",
          },
          options
        )
      )
    );
  });
};
AlertService.warning = (options) => {
  return new Promise((resolve, reject) => {
    resolve(
      Swal.fire(
        Object.assign(
          {
            confirmButtonText: "ปิด",
            confirmButtonColor: "#014B82",
            icon: "warning",
            width: "40%",
          },
          options
        )
      )
    );
  });
};

AlertService.error = (options) => {
  return new Promise((resolve, reject) => {
    resolve(
      Swal.fire(
        Object.assign(
          {
            confirmButtonColor: "#014B82",
            confirmButtonText: "ปิด",
            icon: "error",
            width: "40%",
          },
          options
        )
      )
    );
  });
};
AlertService.confirm = (options) => {
  return new Promise((resolve, reject) => {
    resolve(
      Swal.fire(
        Object.assign(
          {
            icon: "warning",
            showConfirmButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            showCancelButton: true,
            confirmButtonColor: "#014B82",
            cancelButtonColor: "#727070",            
            // reverseButtons: true,
            allowEscapeKey: false,
          },
          options
        )
      )
    );
  });
};
AlertService.question = (options) => {
  return new Promise((resolve, reject) => {
    resolve(
      Swal.fire(
        Object.assign(
          {
            icon: "question",
            showConfirmButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            showCancelButton: true,
            confirmButtonColor: "#014B82",
            // reverseButtons: true,
            allowEscapeKey: false,
          },
          options
        )
      )
    );
  });
};
AlertService.notify = (options) => {
  return new Promise((resolve, reject) => {
    resolve(
      Swal.fire(
        Object.assign(
          {
            confirmButtonClass: "btn btn-success mr-2 ml-2",
            cancelButtonClass: "btn btn-secondary mr-2 ml-2",
            buttonsStyling: false,
            allowOutsideClick: false,
          },
          options
        )
      )
    );
  });
};
export default AlertService;
