import { useContext } from "react";
import MyCombobox from "../../hook/useCombox";


const FormWeather = () => {
  
  return (
    <div className="p-10 bg-white  rounded-md flex flex-col  ">
      <h1 className="text-center text-3xl">Selecione el Pais</h1>
      <MyCombobox />
    </div>
  );
};

export default FormWeather;
