import { Component } from '@angular/core';
import * as Edge from 'electron-edge-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Wrong App Name';

  constructor() {
    var getAppName = Edge.func({
      assemblyFile: "Controller.dll",
      typeName: "Controller.NameController",
      methodName: "GetName"
    });

    getAppName(null, function (error, result) {
      if (error) throw error;
      console.log(result);
      this.title = result;
    });
  }
}
