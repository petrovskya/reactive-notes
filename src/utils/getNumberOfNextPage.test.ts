import { getNumberOfNextPage } from './getNumberOfNextPage';

const TEST_RESPONSE = {
  HALF_LAST_PAGE: [
    {
      userId: '2',
      title: 'What are props in React?',
      description:
        'The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.',
      dateCreation: '19.05.2023, 17:11:47',
      isShared: true,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '10',
    },
    {
      userId: '2',
      title: "What's the difference between Real DOM and Virtual DOM?",
      description:
        "Real DOM is the object of a document with all content and dependencies. In React for each Real DOM is available Virtual DOM, which realizes its light-weight copy as it doesn't take a part in drawing documents. So it's faster to call and edit Virtual DOM then edit Real DOM while viewing it on the screen.",
      dateCreation: '19.05.2023, 17:12:23',
      isShared: false,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '11',
    },
  ],
  FULL_LAST_PAGE: [
    {
      userId: '2',
      title: 'News-news',
      description: 'I turn pizza and coffee into code',
      dateCreation: '14.05.2023, 17:26:25',
      isShared: true,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '2',
    },
    {
      userId: '1',
      title: 'Hi',
      description: 'My first  note',
      dateCreation: '14.05.2023, 17:50:53',
      isShared: false,
      author: 'Petr Ivanov, ivanov@gmail.com',
      id: '3',
    },
    {
      userId: '2',
      title: 'Go to the grocery shop',
      description: 'buy milk and cookies',
      dateCreation: '15.05.2023, 16:01:23',
      isShared: false,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '4',
    },
    {
      userId: '2',
      title: 'MUI Componets',
      description:
        "Material UI is an open-source React component library that implements Google's Material Design.",
      dateCreation: '15.05.2023, 16:01:57',
      isShared: true,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '5',
    },
    {
      userId: '2',
      title: 'CSS rules',
      description:
        'a grouping of one or more CSS properties which are to be applied to one or more target HTML elements.',
      dateCreation: '16.05.2023, 14:23:42',
      isShared: true,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '6',
    },
    {
      userId: '2',
      title: 'What is React?',
      description:
        'React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.\n\nThe important features of React are:\n\nIt supports server-side rendering.\nIt will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.\nIt follows unidirectional data binding or data flow.\nIt uses reusable or composable UI components for developing the view.',
      dateCreation: '19.05.2023',
      isShared: true,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '7',
    },
    {
      userId: '2',
      title: 'What is JSX?',
      description:
        'This is an extension for React, which changes syntax to create React elements, which contains both JavaScript code and elements markup for HTML at the same time.',
      dateCreation: '19.05.2023, 17:09:47',
      isShared: true,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '8',
    },
    {
      userId: '2',
      title: 'What is Redux?',
      description:
        "It is an open-source JavaScript library which is often used with React and other libraries. It improves basic state management and keeps them in storage, which allows to easily check and debug UI elements' behavior.",
      dateCreation: '19.05.2023',
      isShared: true,
      author: 'Yana  Petrova, yana99-09@yandex.ru',
      id: '9',
    },
  ],
  ALL_PAGES: [
    [
      {
        userId: '2',
        title: 'News-news',
        description: 'I turn pizza and coffee into code',
        dateCreation: '14.05.2023, 17:26:25',
        isShared: true,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '2',
      },
      {
        userId: '1',
        title: 'Hi',
        description: 'My first  note',
        dateCreation: '14.05.2023, 17:50:53',
        isShared: false,
        author: 'Petr Ivanov, ivanov@gmail.com',
        id: '3',
      },
      {
        userId: '2',
        title: 'Go to the grocery shop',
        description: 'buy milk and cookies',
        dateCreation: '15.05.2023, 16:01:23',
        isShared: false,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '4',
      },
      {
        userId: '2',
        title: 'MUI Componets',
        description:
          "Material UI is an open-source React component library that implements Google's Material Design.",
        dateCreation: '15.05.2023, 16:01:57',
        isShared: true,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '5',
      },
      {
        userId: '2',
        title: 'CSS rules',
        description:
          'a grouping of one or more CSS properties which are to be applied to one or more target HTML elements.',
        dateCreation: '16.05.2023, 14:23:42',
        isShared: true,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '6',
      },
      {
        userId: '2',
        title: 'What is React?',
        description:
          'React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.\n\nThe important features of React are:\n\nIt supports server-side rendering.\nIt will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.\nIt follows unidirectional data binding or data flow.\nIt uses reusable or composable UI components for developing the view.',
        dateCreation: '19.05.2023',
        isShared: true,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '7',
      },
      {
        userId: '2',
        title: 'What is JSX?',
        description:
          'This is an extension for React, which changes syntax to create React elements, which contains both JavaScript code and elements markup for HTML at the same time.',
        dateCreation: '19.05.2023, 17:09:47',
        isShared: true,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '8',
      },
      {
        userId: '2',
        title: 'What is Redux?',
        description:
          "It is an open-source JavaScript library which is often used with React and other libraries. It improves basic state management and keeps them in storage, which allows to easily check and debug UI elements' behavior.",
        dateCreation: '19.05.2023',
        isShared: true,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '9',
      },
    ],
    [
      {
        userId: '2',
        title: 'What are props in React?',
        description:
          'The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.',
        dateCreation: '19.05.2023, 17:11:47',
        isShared: true,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '10',
      },
      {
        userId: '2',
        title: "What's the difference between Real DOM and Virtual DOM?",
        description:
          "Real DOM is the object of a document with all content and dependencies. In React for each Real DOM is available Virtual DOM, which realizes its light-weight copy as it doesn't take a part in drawing documents. So it's faster to call and edit Virtual DOM then edit Real DOM while viewing it on the screen.",
        dateCreation: '19.05.2023, 17:12:23',
        isShared: false,
        author: 'Yana  Petrova, yana99-09@yandex.ru',
        id: '11',
      },
    ],
  ],
};

describe('take the last received page and all received pages and get the number of the next page if it exists or false if it is not', () => {
  it('get false value instead of the number of the next page when last page is not full', () => {
    expect(
      getNumberOfNextPage(
        TEST_RESPONSE.HALF_LAST_PAGE,
        TEST_RESPONSE.ALL_PAGES,
      ),
    ).toBe(false);
  });
  it('get the number of the next page when last page is full', () => {
    expect(
      getNumberOfNextPage(
        TEST_RESPONSE.FULL_LAST_PAGE,
        TEST_RESPONSE.ALL_PAGES,
      ),
    ).toBe(3);
  });
});
