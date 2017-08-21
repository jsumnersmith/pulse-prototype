const rubricList = [
  "N/A (not observed)",
  "Not Attempting",
  "Ineffective",
  "Minimally Effective",
  "Effective",
  "Highly Effective"
]
export const standardRubrics = [
  {
    text: "DIFFERENTIATION: Differentiating lessons based on student readiness, interest or other factors.",
    rubrics: rubricList
  },
  {
    text: "RIGOR: Implementing lessons and activities that consistently require rigorous thinking of students.",
    rubrics: rubricList
  },
  {
    text: "FORMATIVE ASSESSMENT: Checking for understanding throughout the lesson using information deliberate methods (such as questioning or short tasks).",
    rubrics: rubricList
  },
  {
    text: "ADJUSTING INSTRUCTION: Using formative assessment data to make in-the-moment instructional adjustments and provide feedback.",
    rubrics: rubricList
  }

]

export const longRubrics = [
  {
    text: "Students use strategies and skills that were previously modeled.",
    rubrics: [
     " After receiving adequate time in scaffolded instructional support, all students can complete tasks using the strategy or skill that was modeled.",
      "After receiving limited time in scaffolded instructional support, students complete tasks using the strategy or skill that was modeled.",
      "Students move directly to independent learning, with little in the way of instructional support.",
      "There is a mismatch between what was modeled and what students are asked to do."
    ]
  },
  {
    text: "Students ask criticial questions of each other and evaluate each others responses",
    rubrics: [
      "Students reach a better understanding or consensus based on evidence and opinions provided by others. Students hold each member of the group accountable by using questioning strategies and evidence. The conversation is respectful and courteous.",
      "Students ask for and offer evidence to support claims. However, members continue to maintain initial beliefs or positions about a topic without considering the arguments of others. The conversation is generally respectful but some members may not participate.",
      "There is a process in place for accountable talk. However, student dialogue is limited and there are minimal efforts to support statements, opinions, or claims. The conversation is generally respectful, but is often dominated by one member of the group.",
      "No clear process is in place to facilitate accountable talk. Lack of structure is evidenced by students who are off task, in conflict, or are unable to complete tasks."
    ]
  },
  {
    text: "Students are engaged in meaningful activity",
    rubrics: [
      "Task reflects purpose(s) and allows students an opportunity to use a variety of resources to creatively apply and extend their knowledge. Students have an opportunity to experiment with concepts. The accountability matches the task type.",
      "Tasks provide opportunities for students to apply their knowledge, although the outcome is somewhat assured. The accountability matches the task type.",
      "The task is somewhat reflective of the purpose of the lesson, but there is little opportuniity for student experimentation or innovation. The accountability matches the task type.",
      "Task is an exact replication of what was modeleled with no opportunity for student experimentation with concepts. Accountability is nonexistent or inappropriate for the task."
    ]
  }
]