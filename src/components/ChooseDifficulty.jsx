import React from "react";
import PropTypes from "prop-types";

//Renders 3 radio buttons to choose difficulty
export default function ChooseDifficulty({ handleDifficulty, difficulty }) {
  return (
    <div className="flex" onChange={handleDifficulty}>
      <div className="flex items-center mr-4">
        <input
          defaultChecked={difficulty == 10}
          id="inline-radio"
          type="radio"
          value={10}
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />

        <label
          htmlFor="inline-radio"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Easy
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          defaultChecked={difficulty == 6}
          id="inline-2-radio"
          type="radio"
          value={6}
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
        />

        <label
          htmlFor="inline-2-radio"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Medium
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          defaultChecked={difficulty == 3}
          id="inline-3-radio"
          type="radio"
          value={3}
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor="inline-3-radio"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Hard
        </label>
      </div>
    </div>
  );
}

ChooseDifficulty.propTypes = {
  handleDifficulty: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired,
};
