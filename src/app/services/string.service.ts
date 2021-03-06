import chalk from 'chalk';

import { Di } from 'app/di';
import { Case } from 'app/case';

export class StringService {

  private indentation: string;

  public constructor({ config }: Di) {
    this.indentation = config.indentation;
  }

  public indent(text: string, size: number = 1): string {
    if (typeof text !== 'string') {
      return '';
    }

    const res = text
      .split('\n')
      .map((line) =>
        /^\s*$/.test(line) // is space only string?
          ? ''
          : this.indentation.repeat(size) + line,
      )
      .join('\n');

    return this.trimRight(res);
  }

  /*
  public repeat(str: string, number: number): string {
    let res = String(str);

    for (let i = 0, ilen = number - 2; i < ilen; i++) {
      res += str;
    }

    return res;
  }
  */

  public trimRight(str: string): string {
    return str.replace(/[\s]+(?!\n)$/gm, '');
  }

  public labelCreation(name: Case, entityType?: string): void {
    console.log('\nCreation %s: "%s"\n', entityType ? entityType : name.entityType, chalk.blue.bold(name.dash));
  }

  public labelDone(): void {
    console.log(chalk.green('\nDone!\n'));
  }

}
