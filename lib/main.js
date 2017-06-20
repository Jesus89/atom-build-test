'use babel';

//--------------------------------------------------------------------------
//-- Atom Build Test
//--------------------------------------------------------------------------

import BuildProvider from './services/build';

export default {

  provideBuilder: () => BuildProvider,

  activate() {
    require('atom-package-deps').install('test');
    console.log('Activate');
  }

}
