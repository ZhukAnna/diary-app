import React from 'react';
import { useForm } from 'react-hook-form';
import './Habits.css';

const Habits = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => console.log(data);
  if (errors.length) console.log(errors);

  const habitsList = [
    'Sleep 8 hours',
    'No coffee',
    'Vitamins',
    'Blog post',
    'Exercise',
    '10000 steps',
    'Reading 20 mins',
  ];

  return (
    <form className="habits" onSubmit={handleSubmit(onSubmit)}>
      {habitsList.map((value) => (
        <label
          className="input__label input__label_cbx form__checkbox-wrapper"
          htmlFor={value}
          key={value}
        >
          <input
            type="checkbox"
            className="visually-hidden"
            placeholder={value}
            id={value}
            {...register(value, {})}
          />
          <div className="input input_type_checkbox">
            <svg width="18" height="18" viewBox="0 0 20 20">
              <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
            </svg>
          </div>
          <span>{value}</span>
        </label>
      ))}
    </form>
  );
};

export default Habits;
