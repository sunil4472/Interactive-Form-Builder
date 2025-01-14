import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const validationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z
    .number()
    .min(1, 'Age is required')
    .refine((value) => value >= 18, { message: 'You are underage' }),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Please specify your gender' }),
  }),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  instagram: z
    .string()
    .url('Must be a valid URL (e.g., https://instagram.com/yourprofile)'),
});

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: '',
      age: '',
      gender: '',
      email: '',
      phone: '',
      instagram: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    alert('Form submitted successfully!');
    reset(); // Clear the form fields
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input id="age" type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age && <span className="error">{errors.age.message}</span>}
      </div>

      <div className="form-group">
        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input type="radio" value="male" {...register('gender')} /> Male
          </label>
          <label>
            <input type="radio" value="female" {...register('gender')} /> Female
          </label>
          <label>
            <input type="radio" value="other" {...register('gender')} /> Other
          </label>
        </div>
        {errors.gender && <span className="error">{errors.gender.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" {...register('phone')} />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="instagram">Instagram URL</label>
        <input id="instagram" type="url" {...register('instagram')} />
        {errors.instagram && <span className="error">{errors.instagram.message}</span>}
      </div>

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}

export default Form;
