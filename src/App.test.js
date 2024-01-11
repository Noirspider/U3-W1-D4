import { render, screen } from "@testing-library/react";
import App from "./App";
import fantasy from "./data/fantasy.json"; // Assumendo che questo sia il file JSON utilizzato

// Test for Welcome Component
test("renders the Welcome component correctly", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Benvenuti in EpiBooks!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("renders the correct number of book cards", () => {
  render(<App />);
  const bookCards = screen.getAllByTestId("book-card");
  expect(bookCards).toHaveLength(fantasy.length);
});

test("renders the CommentArea component correctly", () => {
  render(<App />);
  const commentArea = screen.getByTestId("comment-area");
  expect(commentArea).toBeInTheDocument();
});

describe("book filtering through navbar", () => {
  test("renders fantasy books when fantasy genre is selected", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Fantasy/i));

    // Verifica se solo i libri di genere "Fantasy" sono presenti
    const bookCards = screen.getAllByTestId("book-card");
    const fantasyBooks = fantasyBooks.filter((book) => book.genre === "Fantasy");

    bookCards.forEach((card) => {
      const titleElement = card.querySelector("h2"); // Supponendo che il titolo sia nell'elemento <h2>
      if (titleElement) {
        const title = titleElement.textContent;
        expect(title).toBeIn(fantasyBooks.map((book) => book.title));
      }
    });
  });

  // Altri test per altri generi o per la visualizzazione di tutti i libri
});
