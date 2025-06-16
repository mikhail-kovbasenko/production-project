const path = require('path');

const { Project } = require('ts-morph');

const project = new Project({});

// Добавляем все файлы в проект
project.addSourceFilesAtPaths('src/**/*.md');
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sliceMap = {
  pages: 'Page',
  entities: 'Entity',
  features: 'Feature',
  widgets: 'Widget',
};

const createReadmeForSlice = async (slice) => {
  try {
    const slicePath = path.resolve(__dirname, '..', 'src', slice);
    const sliceDirectory = project.getDirectory(slicePath);

    if (!sliceDirectory) {
      console.log(`Directory ${slicePath} not found`);
      return;
    }

    const componentsDirectories = sliceDirectory.getDirectories();

    componentsDirectories.forEach(async (directory) => {
      const readmeFilePath = path.join(directory.getPath(), 'README.md');

      try {
        const readmeFile = directory.getSourceFile('README.md');

        if (!readmeFile) {
          const sourceCode = `## ${sliceMap[slice]} ${directory.getBaseName()} is for ...`;
          const file = await directory.createSourceFile(readmeFilePath, sourceCode, { overwrite: true });
          await file.save();
          console.log(`Created README.md in ${directory.getPath()}`);
        }
      } catch (error) {
        console.error(`Error creating README.md in ${directory.getPath()}:`, error);
      }
    });
  } catch (error) {
    console.error(`Error processing slice ${slice}:`, error);
  }
};

// Добавляем асинхронное выполнение
(async () => {
  try {
    await createReadmeForSlice('features');
    await createReadmeForSlice('entities');
    await createReadmeForSlice('widgets');
    await createReadmeForSlice('pages');

    await project.save();
    console.log('All operations completed successfully');
  } catch (error) {
    console.error('Error:', error);
  }
})();
