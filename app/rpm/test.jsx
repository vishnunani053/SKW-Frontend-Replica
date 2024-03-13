import React, { useEffect, useState } from "react";

 const Testcomp = () => {

  const data = [
    {
      id: 1,
      question: "q1",
      options: [
        { score: 1, label: "ddf htyhery4ytu fgfd", id: 1 },
        { score: 2, label: "fghbetryfgh", id: 2 },
        { score: 3, label: "ddffhhtertgegfd", id: 3 },
        { score: 4, label: "gfhfg56f", id: 4 },
      ],
    },
    {
      id: 2,
      question: "q2",
      options: [
        { score: 1, label: "ddfzzzz fgfd", id: 1 },
        { score: 2, label: "xxxxxxxxx", id: 2 },
        { score: 3, label: "cccccccccccc", id: 3 },
        { score: 4, label: "vvvvvvvvvv", id: 4 },
      ],
    },
    {
      id: 3,
      question: "q3",
      options: [
        { score: 1, label: "qqqqqqqqqqq fgfd", id: 1 },
        { score: 2, label: "wwwwwwwwwwww", id: 2 },
        { score: 3, label: "rrrrrrrrrr", id: 3 },
        { score: 4, label: "yyyyyyyyyyyyyy", id: 4 },
      ],
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState({});
  const [finalScore, setFinalScore] = useState(0);

  const handleChange = (option, questionId) => {
    // Update the selected options state
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };

  useEffect(() => {
    // Calculate the final score whenever selectedOptions change
    let score = 0;
    Object.values(selectedOptions).forEach((selectedOption) => {
      if (selectedOption) {
        score += selectedOption.score;
      }
    });
    setFinalScore(score);
  }, [selectedOptions]);

  return (
    <div className="p-5 my-5">
      {data &&
        data.map((elem, ind) => (
          <div key={ind}>
            <h3>{elem.question}</h3>
            {elem.options.map((elems, index) => (
              <div key={index}>
                <input
                  onChange={() => handleChange(elems, elem.id)}
                  type="radio"
                  id={`${index}-input` + ind}
                  name={elem.question}
                />
                <label htmlFor={`${index}-input` + ind}>{elems.label}</label>
              </div>
            ))}
          </div>
        ))}
      <h3>Score: {finalScore}</h3>
    </div>
  );
};

export default Testcomp;