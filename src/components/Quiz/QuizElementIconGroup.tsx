import { BsClock } from "react-icons/bs";
import { GiTakeMyMoney, GiThink } from "react-icons/gi";
import { useData } from "../../hook/useData";
import { QuizElementIcon } from "./QuizElementIcon";

export function QuizElementIconGroup() {
  const dataCtx = useData();
  return (
    <>
      <QuizElementIcon
        name={BsClock}
        text="Tempo"
        onClick={() => dataCtx.setValues({ decorarOpcao: "Tempo" })}
      />
      <QuizElementIcon
        name={GiTakeMyMoney}
        text="Dinheiro"
        onClick={() => dataCtx.setValues({ decorarOpcao: "Dinheiro" })}
      />
      <QuizElementIcon
        name={GiThink}
        text="Ideias"
        onClick={() => dataCtx.setValues({ decorarOpcao: "Ideias" })}
      />
    </>
  );
}
