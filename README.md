# React Todo App

A simple Todo application built using React and Redux for state management.

## Features

- **Add Todo:** Add new tasks to your list.
- **Edit Todo:** Modify existing tasks inline.
- **Complete Todo:** Mark tasks as completed.
- **Delete Todo:** Remove tasks from the list.

## Technologies Used

- **React:** Front-end JavaScript library for building user interfaces.
- **Redux:** State management library for JavaScript applications.
- **React-Redux:** Official Redux bindings for React.
- **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js installation: [Download Node.js](https://nodejs.org/)
- npm installation: npm comes with Node.js, so you don't need to install it separately.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Folder Structure

```
react-todo-app/
  ├── public/           # Static files
  ├── src/              # React components and Redux logic
  │   ├── components/   # Individual React components
  │   ├── features/     # Redux slice (todoSlice) and store configuration
  │   ├── App.js        # Main application component
  │   ├── index.js      # Entry point
  │   └── App.css       # Styling
  ├── package.json      # Project dependencies and scripts
  └── README.md         # Project documentation
```

## Usage

- **Adding Todos:** Enter a task in the input field and click "Add".
- **Editing Todos:** Click on the edit button (pencil icon) to modify a task.
- **Completing Todos:** Check the checkbox next to a task to mark it as completed.
- **Deleting Todos:** Click on the delete button (trash can icon) to remove a task from the list.

## Acknowledgments

- This project was created as a learning exercise for React and Redux.
- Special thanks to the Redux Toolkit documentation and React community for guidance and inspiration.
