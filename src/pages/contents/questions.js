const questions = [
  {
    question: "Q1.<br /> 나는 컨퍼런스에서 받은 옷을",
    answers: [
      {
        text: "입는다.",
        type: "E",
      },
      {
        text: "안 입는다.",
        type: "I",
      },
    ],
  },
  {
    question: "Q2. 나는 디자이너가 말도 안되는 요구를 하면",
    answers: [
      {
        text: "옆 자리 개발자와 불만 섞인 대화를 한다.",
        type: "E",
      },
      {
        text: "가만히 안 있는다.",
        type: "I",
      },
    ],
  },
  {
    question: "Q3. 나는",
    answers: [
      {
        text: "좋은 회사에서 조용히 일하고 싶다.",
        type: "E",
      },
      {
        text: "네임드 개발자가 되고 싶다.",
        type: "I",
      },
    ],
  },
  {
    question: "Q4. 서비스의 안전성을 높이기 위해서 회사는 매출을",
    answers: [
      {
        text: "포기할 줄 알아야 한다.",
        type: "N",
      },
      {
        text: "포기하면 안 된다.",
        type: "S",
      },
    ],
  },
  {
    question: "Q5. 나는 성장을 위해",
    answers: [
      {
        text: "월급을 포기할 수 있다.",
        type: "N",
      },
      {
        text: "월급은 포기할 수 없다.",
        type: "S",
      },
    ],
  },
  {
    question: "Q6. 버그가 발생했을 때 나는 이렇게 생각한다",
    answers: [
      {
        text: '"아무리 작은 버그라도 당장 고쳐야 해"',
        type: "N",
      },
      {
        text: '"아니야 자잘한 버그는 넘어갈 수 있어"',
        type: "S",
      },
    ],
  },
  {
    question: "Q7. 옆 자리에서 버그를 발견하고 우울해하면",
    answers: [
      {
        text: "어디서 문제가 생겼는지 확인하고 조언해준다.",
        type: "F",
      },
      {
        text: "나도 슬프다.",
        type: "T",
      },
    ],
  },
  {
    question: "Q8. 이직할 때 흥미를 느끼는 쪽은",
    answers: [
      {
        text: "나에게 더 좋은 기업",
        type: "F",
      },
      {
        text: "나에게 더 관심을 가져주는 기업",
        type: "T",
      },
    ],
  },
  {
    question: "Q9. 나의 성장을 위해서는 나를",
    answers: [
      {
        text: "이해해주는 사수가 필요하다.",
        type: "F",
      },
      {
        text: " 잘 아는 사수가 필요하다.",
        type: "T",
      },
    ],
  },
  {
    question: "Q10. 나는 일을 할 때",
    answers: [
      {
        text: "목록을 작성하며 체크한다.",
        type: "J",
      },
      {
        text: "체크는 하지만 자유롭다.",
        type: "P",
      },
    ],
  },
  {
    question: "Q11. 나는 새로운 개발 스택을 보면",
    answers: [
      {
        text: "당장 서비스에 적용하고 싶다.",
        type: "J",
      },
      {
        text: "남들이 써보기 전에는 적용하기 싫다.",
        type: "P",
      },
    ],
  },
  {
    question: "개발 규칙과 방법론은",
    answers: [
      {
        text: "개발자를 억압하고 불편하게 만든다.",
        type: "J",
      },
      {
        text: "프로덕트를 위해 존중되어야 한다.",
        type: "P",
      },
    ],
  },

  {
    question: "",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 0,
  },
];

export default questions;
