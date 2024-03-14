# Quizmify

## Description

Quizmify is an npm package that allows you to easily generate AI-based quizzes containing questions and answers. With Quizmify, you can create engaging quizzes for various purposes such as education, training, or entertainment. The package utilizes state-of-the-art natural language processing techniques to generate diverse and challenging questions tailored to your needs.

## Installation

You can install Quizmify via npm by running the following command:

```bash
npm install quizmify
```

### Example Usage

```bash
const quizmify = require('quizmify');

// Create a quiz with 5 questions
const quiz = quizmify.generateWithOpenAI({
  topic: string;
  amount?: number;
  apiKey: string;
  options_length?: number;
});

// Print the quiz
console.log(quiz);
```

## Features

- Customizable: Generate quizzes with a customizable number of questions.
- AI-based: Utilizes advanced natural language processing to create diverse and challenging questions.
- Easy to Use: Simple API for generating quizzes with minimal configuration.
- Versatile: Suitable for various purposes including education, training, and entertainment.

### Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request on GitHub.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements

Quizmify is built upon various open-source libraries and frameworks. We would like to thank the developers and contributors of these projects for their valuable work.

### Contact

For any inquiries or support, please contact us at prathmeshsadake@gmail.com.

### Stay Connected

Follow us on Twitter for updates and announcements.

**Enjoy quizzing with Quizmify!**
