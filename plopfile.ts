import { NodePlopAPI } from "plop";
import _ from "lodash";

const trimNewlines = (tpl: string) => _.trimStart(tpl, "\n");

const COMPONENT_MAIN = trimNewlines(`
import { Container } from './{{pascalCase name}}.styles';

const {{pascalCase name}}: React.FC = () => {
  return (
    <Container>{{pascalCase name}}</Container>
  );
}

export default {{pascalCase name}};
`);

const COMPONENT_INDEX = trimNewlines(`
import {{pascalCase name}} from './{{pascalCase name}}';

export default {{pascalCase name}};`);

const COMPONENT_STYLES = trimNewlines(`
import styled from 'styled-components';

export const Container = styled.div\`\`;`);

const COMPONENT_STORIES = trimNewlines(`
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {{pascalCase name}} from './{{pascalCase name}}';

export default {
  title: 'Components/{{pascalCase name}}',
  component: {{pascalCase name}},
} as ComponentMeta<typeof {{pascalCase name}}>;

const Template: ComponentStory<typeof {{pascalCase name}}> = (args) => <{{pascalCase name}} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Add props here
};
`);

const SCRIPT_MAIN = trimNewlines(`
/**
 * {{dashCase name}} - {{sentenceCase description}}
 */
import yargs from "yargs";
import _ from 'lodash';

async function main(): Promise<void> {
  // Implement the script functionality here
}

if (require.main === module) {
  yargs(process.argv.slice(1))
    .scriptName("yarn run-script")
    .command(
      "* scripts/{{dashCase name}}",
      "{{sentenceCase description}}",
      {},
      (argv) => main()
    )
    .help().argv;
}
`);

const SCRIPT_README = trimNewlines(`
# {{dashCase name}}

> {{sentenceCase description}}

## Usage

\`\`\`sh
$ yarn run-script scripts/{{dashCase name}}
\`\`\`
`);

export default function generator(plop: NodePlopAPI): void {
  // Component
  plop.setGenerator("component", {
    description: "component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        template: COMPONENT_INDEX,
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        template: COMPONENT_MAIN,
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        template: COMPONENT_STYLES,
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        template: COMPONENT_STORIES,
      },
    ],
  });

  plop.setGenerator("script", {
    description: "script",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "script name",
      },
      {
        type: "input",
        name: "description",
        message: "script description",
      },
    ],
    actions: [
      {
        type: "add",
        path: "scripts/{{dashCase name}}/index.ts",
        template: SCRIPT_MAIN,
      },
      {
        type: "add",
        path: "scripts/{{dashCase name}}/README.md",
        template: SCRIPT_README,
      },
    ],
  });
}
