import {Component} from '@angular/core';

@Component({
    selector: 'ux-text',
    template: `
 <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
    </div>
    `,
    inputs: ['icon', 'text']
})
export class UxText { 
    private icon:string = "";
    private text:string = "";
}