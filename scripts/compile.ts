import { EOL } from "os";
import path from "path";
import ts from "typescript";

/**
 * @param {string} tsConfigPath
 * @param {string} folder
 */
export function compile(tsConfigPath, folder, ...opts) {
  const emitDeclarationOnly = opts.includes(`--emitDeclarationOnly`);

  const parsedConfig = ts.parseJsonConfigFileContent(
    {
      extends: tsConfigPath,
      compilerOptions: {
        rootDir: `src`,
        outDir: `lib`,
        emitDeclarationOnly
      },
      include: [`src/**/*.ts`, `src/**/*.tsx`]
    },
    ts.sys,
    folder
  );

  const program = ts.createProgram({
    options: parsedConfig.options,
    rootNames: parsedConfig.fileNames,
    configFileParsingDiagnostics: parsedConfig.errors
  });

  const diagnostics = program.emit();

  return reportErrors(diagnostics.diagnostics);
}

/**
 * @param {readonly import('typescript').Diagnostic[]} allDiagnostics
 */
function reportErrors(allDiagnostics) {
  const errorsAndWarnings = allDiagnostics.filter(function (d) {
    return d.category !== ts.DiagnosticCategory.Message;
  });

  if (errorsAndWarnings.length === 0) return 0;

  const formatDiagnosticsHost = {
    getCurrentDirectory: () => path.dirname(__dirname),
    getCanonicalFileName: fileName => fileName,
    getNewLine: () => EOL
  };

  for (const errorAndWarning of errorsAndWarnings)
    console.error(ts.formatDiagnostic(errorAndWarning, formatDiagnosticsHost));

  return 1;
}

if (process.mainModule === module) {
  process.exitCode = compile(
    path.resolve(__dirname, `../tsconfig.json`),
    ...process.argv.slice(2)
  );
}
