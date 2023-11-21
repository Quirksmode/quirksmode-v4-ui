"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import IconUser from '@/assets/icons/user.svg';
import IconEmail from '@/assets/icons/email.svg';
import IconWrite from '@/assets/icons/write.svg';
import IconComment from '@/assets/icons/comment.svg';
import IconContact from '@/assets/icons/contact.svg';
import IconQuirksmode from '@/assets/icons/quirksmode.svg';
import IconCross from '@/assets/icons/cross.svg';
import IconTick from '@/assets/icons/tick.svg';
import {
  PageContactFormSendMailData,
} from './PageContactForm.types';
import { submitContactFormData } from './PageContactForm.actions';

const PageContactForm = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    reset
  } = useForm<PageContactFormSendMailData>();

  const onSubmit = async (formData: PageContactFormSendMailData) => {
    setFormSubmitStatus('sending');
    try {
      await submitContactFormData(formData)
      setFormSubmitStatus('success');
      reset();
    } catch {
      setFormSubmitStatus('error');
    }
  };

  return (
    <>
    {formSubmitStatus === 'success' && (
      <p className="PageContact__message PageContact__message--success form__messageInlineWrap">
        <IconTick />
        <span>Success, your message has been sent.</span>
      </p>
    )}
    {formSubmitStatus === 'error' && (
      <p className="PageContact__message PageContact__message--error form__messageInlineWrap">
        <IconCross />
        <span>Error, form failed to send.</span>
      </p>
    )}
    <form onSubmit={handleSubmit(onSubmit)} className="form PageContactForm">
      <div className="form__item">
        <label htmlFor="name">
          <IconUser />
          <span className="visuallyHidden">Enter your name</span>
        </label>
        <input {...register("name", { required: true })} name="name" placeholder="Enter your name" type="text" id="name" onBlur={() => trigger('name')} aria-invalid={errors.name ? "true" : "false"} />
        {errors.name && (
          <span role="alert" className="form__messageInlineWrap">
            <IconCross />
            <span className="form__messageInline">This is wrong.</span>
          </span>
        )}
      </div>

      <div className="form__item">
        <label htmlFor="email">
          <IconEmail />
          <span className="visuallyHidden">Enter your name</span>
        </label>
        <input {...register("email", { required: true, pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        } })} name="email" placeholder="Enter your email" type="email" id="email" onBlur={() => trigger('email')} aria-invalid={errors.email ? "true" : "false"} />
        {errors.email && (
          <span role="alert" className="form__messageInlineWrap">
            <IconCross />
            <span className="form__messageInline">This is wrong.</span>
          </span>
        )}
      </div>

      <div className="form__item">
        <label htmlFor="subject">
          <IconWrite />
          <span className="visuallyHidden">Enter your subject</span>
        </label>
        <input {...register("subject", { required: true })} name="subject" placeholder="Enter your subject" type="text" id="subject" onBlur={() => trigger('subject')} aria-invalid={errors.subject ? "true" : "false"} />
        {errors.subject && (
          <span role="alert" className="form__messageInlineWrap">
            <IconCross />
            <span className="form__messageInline">This is wrong.</span>
          </span>
        )}
      </div>

      <div className="form__item">
        <label htmlFor="message">
          <IconComment />
          <span className="visuallyHidden">Enter your subject</span>
        </label>
        <textarea {...register("message", { required: true })} name="message" placeholder="Enter your message" id="message" aria-invalid={errors.name ? "true" : "false"} />
      </div>

      <button
        type="submit"
        className={`btn--submitIcon${
          formSubmitStatus === 'sending' ? ' btn--submitIcon--loading' : ''
        } `}
        disabled={formSubmitStatus === 'sending'}
      >
        Send Message
        {formSubmitStatus === 'sending' ? (
          <IconQuirksmode className="btn--submitIconSvg--loading" />
        ) : (
          <IconContact className="btn--submitIconSvg" />
        )}
      </button>
    </form>
    </>
  );
};

export default PageContactForm;
