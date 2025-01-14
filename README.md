# React Form Validation with Zod

This project implements a form with validation using `react-hook-form` and `zod` for schema-based validation.

---

## 📑 Table of Contents

1. [⚙️ Setup Instructions](#setup-instructions)
2. [🛠️ Technology Choices and Rationale](#technology-choices-and-rationale)
3. [⚖️ Known Limitations/Trade-offs](#known-limitationstrade-offs)
4. [🚀 Future Improvements](#future-improvements)
5. [🌐 Live Demo](#live-demo)

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

### Prerequisites

- 🖥️ Node.js and npm installed
- 📘 Basic knowledge of React

### Steps
1. 🔗 Clone the repository:
    ```bash
    git clone https://github.com/sunil4472/Interactive-Form-Builder.git
    cd Interactive-Form-Builder
    ```

2. 📦 Install dependencies:
   ```bash
   npm install
   ```

3. ▶️ Start the development server:
   ```bash
   npm start
   ```

4. 🌐 Open your browser and navigate to `http://localhost:3000`.

---

## 🛠️ Technology Choices and Rationale

### Technologies Used:

1. **React**: ⚛️ Chosen for its component-based architecture, reusability, and robust ecosystem.
2. **React Hook Form**: 📝 Simplifies form handling and validation while ensuring high performance.
3. **Zod**: ✅ Provides a schema-based validation approach that is declarative, type-safe, and easily integrated with `react-hook-form`.
4. **CSS**: 🎨 Used for basic styling and layout.

### Rationale:

- `react-hook-form` minimizes re-renders, making it efficient for managing forms.
- Zod's declarative syntax and type inference make validation rules easy to read, maintain, and enforce.
- Using a schema-based approach ensures consistent validation logic and centralized control.

---

## ⚖️ Known Limitations/Trade-offs

1. **Zod Dependency**:
   - While powerful, Zod adds a learning curve for developers unfamiliar with schema-based validation.

2. **Static Validation Rules**:
   - The current implementation uses hardcoded validation rules. Dynamic validation or conditional logic may require additional handling.

3. **Limited Styling**:
   - Basic styling has been applied. For a production-ready application, more comprehensive styling and responsive design would be necessary.

---

## 🚀 Future Improvements

1. **Dynamic Validation**:
   - Implement context-aware validation rules based on user inputs or API responses.

2. **Enhanced UI/UX**:
   - Add responsive design and animations for a polished user experience.

3. **Localization**:
   - Support multiple languages for validation messages.

4. **Error Logging**:
   - Add error logging for debugging and analytics.

5. **Unit Tests**:
   - Implement tests to ensure form validation rules function as intended.

---

## 🌐 Live Demo

A live demo of the project can be accessed [here](#).

---

## ⏳ Time Spent

Approximately **4-5 hours** were spent on:

- 🏗️ Setting up the project
- 🖊️ Implementing the form and validation
- 📝 Writing this README

