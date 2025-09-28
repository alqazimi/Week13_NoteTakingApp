// TODO: Import useForm, zodResolver, axios, useNavigate, useState, and noteSchema

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { noteSchema } from "../schema/notes";

import { Save } from "lucide-react";

// TODO: Setup isSubmitting state with useState
// TODO: create navigate variable and set to useNavigate()

const CreateNoteForm = ({ onSubmitSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // TODO: Set up the form with useForm from react-hook-form and zodResolver from @hookform/resolvers/zod

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const sendToTheServer = async (data) => {
    // TODO: Send the data to the server
    // TODO: Use axios to create a new note in the server using the endpoint http://localhost:3001/api/notes

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      await axios.post("http://localhost:3001/api/notes", data, {
        headers: { "Content-Type": "application/json" },
      });
      setSubmitSuccess(true);
      reset();
      onSubmitSuccess?.();
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        "There was an error submitting your form. Please try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* TODO: Setup the form with TailwindCSS, create a form with the following fields: title, content, and submit button */
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Create a New Note</h1>

      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-1 mb-6">
          Note created successfully!
        </div>
      )}

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(sendToTheServer)} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="form-label block mb-1 font-semibold"
          >
            Note Title
          </label>
          <input
            id="title"
            type="text"
            className={`input-field w-full border p-2 rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="content"
            className="form-label block mb-1 font-semibold"
          >
            content
          </label>
          <textarea
            id="content"
            rows={5}
            className={`input-field w-full border p-2 rounded ${
              errors.content ? "border-red-500" : "border-gray-300"
            }`}
            {...register("content")}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="save note"
            disabled={isSubmitting || !isValid || !isDirty}
            className={`w-full px-4 py-3 rounded text-white ${
              isValid && isDirty && !isSubmitting
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-yellow-400 cursor-not-allowed"
            } flex items-center justify-center gap-2`}
          >
            <Save size={16} />
            {isSubmitting ? "Submitting..." : "Save note"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNoteForm;
