'use babel';

import fs from 'fs';
import path from 'path';


export default class BuildProvider {

  constructor(cwd) {
    this.cwd = cwd;
    console.log("New Builder", this.cwd);
  }

  getNiceName() {
    return 'Atom Build Test';
  }

  isEligible() {
    return true;
  }

  settings() {
    return [
      {
        name: 'Test: Hello',
        exec: 'echo',
        sh: false,
        args: [ '"HELLO!"'],
        atomCommandName: 'test:hello',
        preBuild: () => {
          console.log('Run command Hello');
        },
      }
    ]
  }

}
