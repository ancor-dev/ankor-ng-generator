import { Case } from 'app/case';
import { Di } from 'app/di';
import { CommonOptions } from 'app/common-options';

interface Options extends CommonOptions {
  directory: boolean;
  inlineStyle: boolean;
  inlineTemplate: boolean;
  forRoute: boolean;
}

export default ({prog, fs, config, str}: Di) => prog
  .command('component', 'Generates angular component')
  .argument('<name>', 'Component name')
  .option('-i, --directory', 'Create or no directory for the component', prog.BOOL)
  .option('-t, --inline-template', '', prog.BOOL, false)
  .option('-s, --inline-style', '', prog.BOOL, false)
  .option('-r, --for-route', 'Generate component without selector', prog.BOOL, false)
  .action((args, opts: Options, logger) => {
    const name = Case.for(args.name, 'component');
    const hasDir = opts.directory !== undefined
      ? opts.directory
      : (!opts.inlineStyle || !opts.inlineTemplate);

    str.labelCreation(name);

    //
    // 1. Make dir
    //
    if (hasDir) {
      fs.dir(name.dash);
    }


    //
    // 2. Make index.ts file
    //


    //
    // 3. HTML template
    //
    const templateVars = {
      name: name.title,
    };
    let template: string, templateFile: string;
    if (opts.inlineTemplate) {
      template = str.indent(
        fs.tplAsStr(require('./main-html'), templateVars),
        2,
      );
    } else {
      fs.tpl(`${hasDir ? name.fileInDir : name.file}.html`, require('./main-html'), templateVars);
      templateFile = `${name.file}.html`;
    }


    //
    // 4. Style file
    //
    const styleVars = {
      sharedStylePath: config.sharedStylePath,
    };
    let style: string, styleFile: string;
    if (opts.inlineStyle) {
      style = str.indent(
        fs.tplAsStr(require('./inline-css'), styleVars),
        2,
      );
    } else {
      fs.tpl(`${hasDir ? name.fileInDir : name.file}.${config.styleExt}`, require('./main-scss'), styleVars);
      styleFile = `${name.file}.${config.styleExt}`;
    }


    //
    // 5. The component
    //
    const tsVars: any = {
      selector: opts.forRoute ? undefined : `${config.appPrefix}-${name.dash}`,
      className: name.classTyped,
      debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                  ? config.debuggerPackage
                  : undefined,
      description: opts.description,
      style, styleFile,
      template, templateFile,
    };
    fs.tpl(`${hasDir ? name.fileInDir : name.file}.ts`, require('./main-ts'), tsVars);


    //
    // 6. Unit-test
    //

    //
    // 7. e2e test
    //


    str.labelDone();
  })
;
