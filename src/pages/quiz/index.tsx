import { useState } from "react";
import { useForm } from "react-hook-form";
import { Pagination } from "../../components/Pagination";
import { Form } from "../../components/Quiz/Form";
import { QuizAcceptTerms } from "../../components/Quiz/QuizAcceptTerms";
import { QuizStep1 } from "../../components/Quiz/QuizStep1";
import { QuizStep2 } from "../../components/Quiz/QuizStep2";
import { QuizStep3 } from "../../components/Quiz/QuizStep3";
import { DataProvider } from "../../hook/useData";
import { SEO } from "../../utils/seo";

export default function Quiz() {
  const [quizStep, setQuizStep] = useState(0);

  function nextQuizStep() {
    setQuizStep(quizStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: { project: "", quanto: 0, image: [] },
    mode: "onBlur",
  });

  async function onSubmit(data) {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      return alert("Até aqui tudo bem!");
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DataProvider>
        <SEO title="Quiz" />
        {quizStep === 0 && (
          <QuizStep1
            register={register}
            setValueForm={setValue}
            getValuesForm={getValues}
          >
            <Pagination onClick={nextQuizStep} />
          </QuizStep1>
        )}
        {quizStep === 1 && (
          <QuizStep2>
            <Pagination onClick={nextQuizStep} />
          </QuizStep2>
        )}
        {quizStep === 2 && (
          <QuizStep3>
            <Pagination onClick={nextQuizStep} />
          </QuizStep3>
        )}
        {quizStep === 3 && <QuizAcceptTerms onSubmit={onSubmit} />}
      </DataProvider>
    </Form>
  );
}
