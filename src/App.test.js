// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const findTextInChildren = (element, text) => {
    if (element.textContent.includes(text)) {
      return true;
    }
  
    for (let i = 0; i < element.children.length; i++) {
      const child = element.children[i];
      if (findTextInChildren(child, text)) {
        return true;
      }
    }
  
    return false;
  };

  const linkElement = screen.queryByText((content, element) => {
    return findTextInChildren(element, 'learn react');
  });

  expect(linkElement).toBeTruthy();
});