module.exports = (plop) => {
  plop.setGenerator('fibra-component', {
    description: `Create a Component`,
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `../src/components/{{dashCase name}}/index.tsx`,
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: `../src/components/{{dashCase name}}/styles.ts`,
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: `../src/components/{{dashCase name}}/interface.ts`,
        templateFile: 'templates/interface.ts.hbs',
      },
      {
        type: 'add',
        path: `../src/components/{{dashCase name}}/spec.tsx`,
        templateFile: 'templates/component-spec.tsx.hbs',
      },
    ],
  });
};
