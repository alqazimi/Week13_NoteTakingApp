# Week 13: Note Taking App

## React Forms, Form Validation, and Tailwind CSS Styling

## Introduction

- For this project, you'll be building a Note Taking application using React, React Hook Form, Zod for form validation, and Tailwind CSS for styling.
- You will learn how to create and validate forms, handle form submissions, and style your components using Tailwind CSS.

## Instructions

### Task 1: Project Setup

1. Create a forked copy of this project.
2. Clone your OWN version of the repository in your terminal
3. CD into the project base directory `cd Week13_NoteTakingApp`
4. First, set up the server:
   ```bash
   cd server
   npm install
   npm start
   ```
5. Open a new terminal window and set up the client:
   ```bash
   # Make sure you're in the project root directory
   npm install
   npm run dev
   ```
6. Create a new branch: . Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
7. Push commits: git push origin `<firstName-lastName>`.

### Task 2: MVP

- [ ] Set up the note schema in `schema/notes.js` following the TODO instructions
- [ ] Implement the Create Note form in `CreateNoteForm.jsx`:
  - Set up form validation using Zod
  - Implement form submission handling
  - Style the form using Tailwind CSS
- [ ] Create a beautiful and responsive UI for the note creation form
  - Make sure your form looks like the [Form preview image](Form.png)
  - Make sure your notes list looks like the [Notes preview image](Notes.png)
- [ ] Implement proper error handling and success messages
- [ ] Follow all TODO instructions in the different files

### Task 3: Stretch Goals

- [ ] Add a rich text editor for note content
- [ ] Implement note categories/tags
- [ ] Add a search functionality for notes
- [ ] Implement note editing and deletion
- [ ] Add a dark mode toggle
- [ ] Add animations for form submission and success/error states
- [ ] Implement note sharing functionality
- [ ] Add a character counter for the title and content fields

## Submission Format

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**
