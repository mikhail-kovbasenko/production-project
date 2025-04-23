import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];

const files = project.getSourceFiles();

function isAbsolute(value: string) {
  if (layers.some((layer) => value.startsWith(layer))) {
    return true;
  }

  return false;
}

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
