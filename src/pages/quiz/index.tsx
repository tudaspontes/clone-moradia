import { QuizStep1 } from '../../components/Quiz/QuizStep1';
import { QuizStep2 } from '../../components/Quiz/QuizStep2';
import { QuizStep3 } from '../../components/Quiz/QuizStep3';
import { QuizAcceptTerms } from '../../components/Quiz/QuizAcceptTerms';
import { SEO } from "../../utils/seo";
import { useState } from "react";
import { DataProvider } from '../../hook/useData';
import { Pagination } from '../../components/Pagination';

export default function Quiz() {

  const [quizStep, setQuizStep] = useState(0)

  function nextQuizStep() {
    setQuizStep(quizStep +1)
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
  <DataProvider>
    <SEO title="Quiz" />
    {(quizStep === 0) && (
      <QuizStep1>
        <Pagination onClick={nextQuizStep} />
      </QuizStep1>
    )}
    {(quizStep === 1) && (
      <QuizStep2>
        <Pagination onClick={nextQuizStep} />
      </QuizStep2>
    )}
    {(quizStep === 2) && (
      <QuizStep3>
        <Pagination onClick={nextQuizStep} />
      </QuizStep3>
    )}
    {(quizStep === 3) && (
      <QuizAcceptTerms />
    )}
  </DataProvider>
  )
}