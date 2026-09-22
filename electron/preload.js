const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('sherbrookeDesktop', {
  app: 'Sherbrooke Explorer',
});
