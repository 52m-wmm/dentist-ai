import { is } from "date-fns/locale";
import { useState } from "react";
import { Gender } from "@prisma/client";

interface AddDoctorDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
function AddDoctorDialog({isOpen, onClose}: AddDoctorDialogProps) {

    const [newDoctor, setNewDoctor] = useState({
      name: "",
      email: "",
      phone: "",
      specialization: "",
      gender: "MALE" as Gender,
      isActive: true,
    });
  return (
    <div>AddDoctorDialog</div>
  )     
}

export default AddDoctorDialog