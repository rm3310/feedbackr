

function handleSubmit (event) {
    event.preventDefault();
    handleQuestionSubmit(question);
    setQuestion({
      questionType: 1,
      question: "",
      points: 0,
      answerOptions: [
        {
          value: 0,
          label: ""
        }
      ],
      correctAnswer: "",
      tags: [],
      time: 0,
    })
  }
  
  function handleChange (event, index) {
    const value = event.target.value;
    if (event.target.name !== "answerOptions") {
      setQuestion({
        ...question,
        [event.target.name]: value
      })
    } else if (event.target.name === "answerOptions") {
      const array = [...question.answerOptions];
      array[index] = {
        value: index,
        label: value
      }
      setQuestion({
        ...question,
        [event.target.name]: array
      })
    }
  }

  function handleAdd (event, index) {
    const name = event.target.name;
    const array = [...question[name]];
    console.log('array', array);
    array.splice(index+1,0,"");
    setQuestion({
      ...question,
      [event.target.name]: array
    })
  }

  function handleRemove (event, index) {
    const name = event.target.name;
    const array = [...question[name]];
    array.splice(index,1);
    console.log('array', array);
    setQuestion({
      ...question,
      [event.target.name]: array
    })
  }

  function renderAnswer (questionType, question, handleChange, handleAdd, handleRemove) {
    if (questionType === 1) {
      return <WrittenText handleChange={handleChange} question={question}/>
    } else if (questionType === 2) {
      return <MultipleChoice handleChange={handleChange} handleAdd={handleAdd} handleRemove={handleRemove} question={question}/>
    } 
  }